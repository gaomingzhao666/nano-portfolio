import { Octokit } from 'octokit'
import { githubToken } from '~/server/utils/githubInfo'

// repoImage url consist by `~/assets/images/repoImages/${repo}Image`
// repoImages:[string]
const baseUrl: string = '~/assets/images/repoImages'
const suffix: string = 'Image'

const getRepoIamgeUrl = (repoInfo: any) => {
	let repoName: [string] = ['']
	for (let index: number = 0; index < repoInfo.data.length; index++)
		repoName[index] = repoInfo.data[index].name
	const repoImageUrl: [string] = ['']
	for (let index: number = 0; index < repoName.length; index++) {
		repoImageUrl[index] = `${baseUrl}/${repoName[index]}/${suffix}`
	}
	return <[string]>repoImageUrl
}

const getClearedRepo = (repoInfo: any) => {
	console.log(repoInfo.data.topics)

	return repoInfo.data.filter(
		(data: any) =>
			!(data.topics.includes('config') || data.topics.includes('backup'))
	)
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

		let githubRepoInfo = await getGithubRepoInfo()
		console.log(githubRepoInfo)

		const repoImageUrl: [string] = getRepoIamgeUrl(githubRepoInfo)
		const newGithubRepoInfo = getClearedRepo(githubRepoInfo)
		console.log(newGithubRepoInfo)

		if (githubRepoInfo.status === 200) {
			setResponseStatus(event, 200)
			return <repoInfoGet>{
				status: true,
				data: newGithubRepoInfo,
				repoImageUrl: repoImageUrl,
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
