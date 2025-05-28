const getAllRepos = async () => {
	const { data } = await $fetch<repoInfoGet>('/api/repo/info', {
		method: 'GET',
	})
	return data
}

interface reposBody {
	repoName: string
}
export default defineEventHandler(async (event) => {
	const { repoName }: reposBody = getQuery(event)

	if (!repoName)
		return <errorType>{
			status: false,
			data: {
				message: 'Repo name does not exist',
			},
		}

	const allRepos = await getAllRepos()
	const filteredRepos = allRepos.filter((item: any) =>
		item.name.toLocaleLowerCase().includes(repoName.toLocaleLowerCase())
	)
	if (filteredRepos.length > 0)
		return <repoSearchByNameGet>{
			status: true,
			data: filteredRepos,
		}
	else
		return <errorType>{
			status: false,
			data: {
				message: 'Repos not found',
			},
		}
})
