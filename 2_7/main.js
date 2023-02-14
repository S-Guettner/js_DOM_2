const button = document.querySelector("button")
const umwickeln = document.querySelector(".umwickeln")

let counter = 0

button.addEventListener('click', () => {
    
    const newElement = document.createElement('div')
    newElement.innerHTML = `${counter}`
    counter % 10 === 0 || counter === 0 ? newElement.classList.add("weiss")
    :newElement.classList.add("rechteck")
    const umwickeln = document.querySelector(".umwickeln")
    umwickeln.appendChild(newElement)
    counter++
})