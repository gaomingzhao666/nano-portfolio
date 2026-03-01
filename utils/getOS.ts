const OS_PATTERNS: [RegExp, string][] = [
  [/Mac|Macintosh|MacIntel|MacPPC|Mac68K/i, 'Mac OS'],
  [/iPhone|iPad|iPod/i, 'iOS'],
  [/Win|Win32|Win64|Windows|WinCE/i, 'Windows'],
  [/Android/i, 'Android'],
  [/Linux/i, 'Linux'],
]

export default (): string => {
  const ua = navigator.userAgent
  const platform =
    (navigator as any).userAgentData?.platform ?? navigator.platform ?? ''

  for (const [pattern, os] of OS_PATTERNS) {
    if (pattern.test(platform) || pattern.test(ua)) return os
  }

  return 'Unknown OS'
}
