import { Octokit } from 'octokit'
import { githubToken } from '~/server/utils/githubInfo'

const getClearedRepo = (repoInfo: any) => {
	return repoInfo.data.filter(
		(data: any) =>
			!(data.topics.includes('config') || data.topics.includes('backup'))
	)
}

export default defineEventHandler(async (event) => {
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
})
