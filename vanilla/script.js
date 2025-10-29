document.getElementById('btn').addEventListener('click', () => {
  const el = document.getElementById('msg')
  el.textContent = 'Button clicked at ' + new Date().toLocaleTimeString()
})
