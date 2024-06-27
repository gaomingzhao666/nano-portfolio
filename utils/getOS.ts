export default (): string => {
	const { userAgent } = navigator
	const platform = (navigator as any).userAgentData?.platform

	switch (true) {
		case ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].includes(platform):
			return 'Mac OS'
		case ['iPhone', 'iPad', 'iPod'].includes(platform):
			return 'iOS'
		case ['Win32', 'Win64', 'Windows', 'WinCE'].includes(platform):
			return 'Windows'
		case /Android/.test(userAgent):
			return 'Android'
		case /Linux/.test(platform):
			return 'Linux'
		default:
			return 'Unknown OS'
	}
}
