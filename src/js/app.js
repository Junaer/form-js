// TODO: write code here

console.log('app.js bundled');

let button = document.querySelector('.btn')
let body = document.querySelector('.main')
let newDiv = document.createElement("div")

button.addEventListener('click', () => {
    console.log(button.getBoundingClientRect())
    let { right, top, bottom, left, x, height} = button.getBoundingClientRect()
    if (newDiv.classList[0] === 'message') {
        console.log(newDiv, 123)
        body.removeChild(newDiv)
        newDiv = document.createElement("div")
    }else{
        newDiv = document.createElement("div")
        newDiv.classList.add('message')
        newDiv.innerHTML = "<h3 class='title'>Popover title </h3>"
        newDiv.innerHTML += "<p class='text'>And here's some amazing content. It's very engaging. Right?</p>";
        newDiv.innerHTML += "<div class='arrow'></div>"
        console.log(button.offsetWidth)
        newDiv.style.top = top - top + 10 + 'px'
        body.appendChild(newDiv)
        console.log(newDiv)
    }
})