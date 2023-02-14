const myList = document.querySelector("#myList")
const unten = document.querySelector(".unten")
const output = document.querySelector("output")

//Possible to choose all child elements

/* unten.addEventListener('click', (e) => {
    const selectedButton = Number(e.target.value)
    console.log(selectedButton)
    switch(selectedButton){
        case 0 : 
            output.innerHTML = myList.children[0].innerHTML
        break
        case 1 :
            output.innerHTML = myList.children[6].innerHTML
        break
        case 2 :
            output.innerHTML = myList.children[1].innerHTML
        break
        case 3:
            output.innerHTML = myList.children[5].innerHTML
    }
})
 */

unten.addEventListener('click', (e) => {
    const selectedButton = Number(e.target.value)
    switch(selectedButton){
        case 0 : 
            output.innerHTML = myList.firstElementChild.innerHTML
        break
        case 1 :
            output.innerHTML = myList.lastElementChild.innerHTML
        break
        case 2 :
            output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML
        break
        case 3:
            output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML
    }
})

