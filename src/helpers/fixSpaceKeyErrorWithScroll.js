export const fixSpaceKeyErrorWithScroll = () => {
  window.addEventListener('keypress', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault()
    }
  })
  return () => {
    window.removeEventListener('keypress', () => {})
  }
}
