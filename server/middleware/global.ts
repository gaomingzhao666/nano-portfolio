export default defineEventHandler((event) => {
	console.log('New request from: ' + getRequestURL(event))
})
