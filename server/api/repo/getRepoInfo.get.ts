export default defineEventHandler(async (event) => {
	try {
		import { Octokit } from 'octokit'

		const githubToken = useGithubToken()
		const octokit = new Octokit({
			auth: githubToken,
		})

		const init = async () => {
			const res = await octokit.request('GET /user/repos', {
				headers: {
					'X-GitHub-Api-Version': '2022-11-28',
				},
			})
			console.log(res)
		}
		init()
		//  ---------
		return <loginPost>{
			status: true,
			data: {
				accountInfo: user,
				message: `Login Successfully, welcome ${username}!`,
				token: token,
			},
		}
	} catch (error) {
		console.log('Error in login module')
	}
})
