import { Octokit } from 'octokit'
import { githubToken, githubName } from '~/server/utils/githubInfo'

export default defineEventHandler(async (event) => {
	try {
		const { repo } = await readBody(event)

		const getGithubRepoLanguages = async () => {
			const octokit = new Octokit({
				auth: githubToken,
			})

			const data = await octokit.request(
				'GET /repos/{owner}/{repo}/languages',
				{
					owner: githubName,
					repo: repo,
					headers: {
						'X-GitHub-Api-Version': '2022-11-28',
					},
				}
			)
			return data
		}

		const githubRepoLanguages = await getGithubRepoLanguages()

		setResponseStatus(event, 200)
		return <repoLanguagesGet>{
			status: true,
			data: githubRepoLanguages,
		}
	} catch (error) {
		console.log('Error in githubRepoLanguages module')
		console.log(error)
	}
})
