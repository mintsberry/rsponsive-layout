window.onload = () => {
  let swiper = document.querySelector('.wrapper')
  let index = 0
  function next() {
    index++
    let width = swiper.clientWidth
    if (index >= swiper.childElementCount-1) {
      setTimeout(() => {
        index = 0
        swiper.style.transition =  'none'
        swiper.style.transform = `translateX(0px)`
      }, 500);
    } else {
      swiper.style.transition =  'all .5s ease-in'
    }
    let offWidth = width * index
    swiper.style.transform = `translateX(-${offWidth}px)`

  }
  setInterval(() => {
    next()
  }, 2000);
}