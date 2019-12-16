window.onload =  () => {
  let tabs = document.querySelectorAll('.tab-nav')
  let tab = tabs[0]
  let children = tab.children
  let tabCard = document.querySelectorAll('.tab-card')
  let tabContent = tabCard[0].querySelectorAll('.content')
  for (let i = 0; i < tab.childElementCount; i++) {
    children[i].onclick = () => {
      tabContent.forEach(el => {
        el.style.display = 'none'
      })
      for (let i = 0; i < tab.childElementCount; i++) {
        children[i].classList.remove('active')
      }
      children[i].classList.add('active')
      tabContent[i].style.display = 'inline-block'
    }
  }
}