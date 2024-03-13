// userAgentData at latest chrome v88 above available
const userAgentData = navigator.userAgentData

const browserName: string = userAgentData.brands[0].brand
const browserVersion: string = userAgentData.brands[0].version

interface browserInfo {
  browserName: string
  browserVersion: string
}
export default () => {
  return <browserInfo>{
    browserName: browserName,
    browserVersion: browserVersion,
  }
}
