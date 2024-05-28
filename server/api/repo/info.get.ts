import { Octokit } from 'octokit'
import { githubToken } from '~/server/utils/githubInfo'

// repoImage url consist by `~/assets/repoImages/${repo}Image`
// repoImages:[string]
const baseUrl: string = '/assets/repoImages'
const suffix: string = '.png'
const getClearedRepo = (repoInfo: any) => {
	return repoInfo.data.filter(
		(data: any) =>
			!(data.topics.includes('config') || data.topics.includes('backup'))
	)
}
const getRepoIamgeUrl = (repoInfo: any) => {
	let repoName: [string] = ['']
	for (let index: number = 0; index < repoInfo.length; index++)
		repoName[index] = repoInfo[index].name
	const repoImageUrl: [string] = ['']
	for (let index: number = 0; index < repoName.length; index++) {
		repoImageUrl[index] = `${baseUrl}/${repoName[index]}${suffix}`
	}
	return <[string]>repoImageUrl
}

export default defineEventHandler(async (event) => {
	try {
		const getGithubRepoInfo = async () => {
			const octokit = new Octokit({
				auth: githubToken,
			})

			const data = await octokit.request('GET /user/repos', {
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			})
			return data
		}

		let githubRepoInfo: any = await getGithubRepoInfo()
		const newGithubRepoInfo: any = getClearedRepo(githubRepoInfo)
		const repoImageUrl: [string] = getRepoIamgeUrl(newGithubRepoInfo)

		for (let index = 0; index < newGithubRepoInfo.length; index++)
			newGithubRepoInfo[index].imageUrl = repoImageUrl[index]

		if (githubRepoInfo.status === 200) {
			setResponseStatus(event, 200)
			return <repoInfoGet>{
				status: true,
				data: newGithubRepoInfo,
			}
		} else
			return <errorType>{
				status: false,
				data: {
					message: 'Github api encountered problem',
				},
			}
	} catch (error) {
		console.log('Error in repoInfo module')
		console.log(error)
	}
})
