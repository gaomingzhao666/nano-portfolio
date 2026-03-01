export const getLocalTime = (databaseTime: string) =>
  new Date(databaseTime).toLocaleString()
