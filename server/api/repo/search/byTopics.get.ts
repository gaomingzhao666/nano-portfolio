const getAllRepos = async () => {
	const { data } = await $fetch<repoInfoGet>('/api/repo/info', {
		method: 'GET',
	})
	return data
}

interface reposBody {
	repoTopics: string[]
}
export default defineEventHandler(async (event) => {
	const { repoTopics }: reposBody = getQuery(event)

	if (!repoTopics)
		return <errorType>{
			status: false,
			data: {
				message: 'Repo topics does not exist',
			},
		}

	const allRepos = await getAllRepos()
	const filteredRepos = allRepos.filter((item: any) =>
		item.topics.includes(repoTopics)
	)

	if (filteredRepos.length > 0) {
		return <repoSearchByTopicsGet>{
			status: true,
			data: filteredRepos,
		}
	} else
		return <errorType>{
			status: false,
			data: {
				message: 'Repos not found',
			},
		}
})
