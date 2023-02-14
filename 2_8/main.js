const userinput = document.querySelector("#userinput")
const ul = document.querySelector("ul")
const button = document.querySelector("#enter")

button.addEventListener('click', () => {
    const newListElement = document.createElement('li')
    newListElement.innerHTML = userinput.value
    ul.appendChild(newListElement)
})