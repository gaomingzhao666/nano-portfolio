import { Octokit } from 'octokit'

const githubToken = useGithubtoken().value
console.log(githubToken)

const init = async () => {
	const octokit = new Octokit({
		auth: githubToken,
	})
	const res = await octokit.request('GET /user/repos', {
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	})
	console.log(res)
}
init()
