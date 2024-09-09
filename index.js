
let scrollCon = document.querySelector('.gallery')
let left = document.getElementById('prev')
let right = document.getElementById('next')

scrollCon.addEventListener('wheel',(evt) => {
    evt.preventDefault()
    scrollCon.scrollLeft += evt.deltaY
})
left.addEventListener('click',(evt) => {
   scrollCon.scrollLeft -=  900
})

right.addEventListener('click',(evt) => {
    scrollCon.scrollLeft += 900
 })

