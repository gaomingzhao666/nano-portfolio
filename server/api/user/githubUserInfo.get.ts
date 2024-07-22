import { Octokit } from 'octokit'
import { githubToken } from '~/server/utils/githubInfo'

export default defineEventHandler(async (event) => {
	const getGithubUserInfo = async () => {
		const octokit = new Octokit({
			auth: githubToken,
		})

		const data = await octokit.request('GET /user', {
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		})
		return data
	}

	const githubUserInfo = await getGithubUserInfo()

	if (githubUserInfo.status === 200) {
		setResponseStatus(event, 200)
		return <githubUserInfoGet>{
			status: true,
			data: githubUserInfo,
		}
	} else
		return <errorType>{
			status: false,
			data: {
				message: 'Github api encountered problem',
			},
		}
})
