// TODO: write code here

console.log('app.js bundled');

let button = document.querySelector('.btn')
let body = document.querySelector('.main')
let newDiv = document.createElement("div")

button.addEventListener('click', () => {
    console.log(button.getBoundingClientRect())
    let { right, top, bottom, left } = button.getBoundingClientRect()
    if (newDiv.classList[0] === 'message') {
        console.log(newDiv, 123)
        body.removeChild(newDiv)
        newDiv = document.createElement("div")
    }else{
        newDiv = document.createElement("div")
        newDiv.classList.add('message')
        newDiv.innerHTML = "<h3 class='title'>Popover title </h3>"
        newDiv.innerHTML += "<p class='text'>And here's some amazing content. It's very engaging. Right?</p>";
        console.log(button.offsetWidth)
        newDiv.style.left = left + button.offsetWidth / 2 - newDiv.offsetWidth / 2 - 150 + 'px'
        newDiv.style.top = top - top + 10 + 'px'
        newDiv.style.right = right + 'px'
        newDiv.style.bottom = bottom + 'px'
        body.appendChild(newDiv)
        console.log(newDiv)
    }
})