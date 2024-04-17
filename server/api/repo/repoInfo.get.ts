import { Octokit } from 'octokit'
import { githubToken } from '~/server/utils/githubInfo'

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

		const githubRepoInfo = await getGithubRepoInfo()

		setResponseStatus(event, 200)
		return <repoInfoGet>{
			status: true,
			data: githubRepoInfo,
		}
	} catch (error) {
		console.log('Error in repoInfo module')
		console.log(error)
	}
})
