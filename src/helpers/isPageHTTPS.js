export const isPageHTTPS = () => {
  const protocol = document.location.protocol
  return protocol.includes('https')
}
