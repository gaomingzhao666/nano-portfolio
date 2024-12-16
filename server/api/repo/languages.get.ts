import { Octokit } from 'octokit'
import { githubToken, githubName } from '@/server/utils/githubInfo'

interface queryType {
  repo: string
}

export default defineEventHandler(async (event) => {
  const query: queryType = await getQuery(event)

  const getGithubRepoLanguages = async () => {
    const octokit = new Octokit({
      auth: githubToken,
    })

    const data = await octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: githubName,
      repo: query.repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    return data
  }

  const githubRepoLanguages = await getGithubRepoLanguages()

  if (githubRepoLanguages.status === 200) {
    setResponseStatus(event, 200)
    return <repoLanguagesGet>{
      status: true,
      data: githubRepoLanguages,
    }
  } else
    return <errorType>{
      status: false,
      data: {
        message: 'Github api encountered problem',
      },
    }
})
