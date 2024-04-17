import { Octokit } from 'octokit'
import { githubToken, githubName } from '~/server/utils/githubInfo'

export default defineEventHandler(async (event) => {
	try {
		const { repo } = await readBody(event)

		const getRepoContributors = async () => {
			const octokit = new Octokit({
				auth: githubToken,
			})

			const data = await octokit.request(
				'GET /repos/{owner}/{repo}/contributors',
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

		const repoContributors = await getRepoContributors()

		setResponseStatus(event, 200)
		return <repoContributorsGet>{
			status: true,
			data: repoContributors,
		}
	} catch (error) {
		console.log('Error in repoContributors module')
		console.log(error)
	}
})
