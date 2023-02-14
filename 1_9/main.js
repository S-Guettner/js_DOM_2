const farbeAuswahlen = document.querySelector("#farbeAuswahlen")
const button = document.querySelector("#button")

let selectedColor = 0
let selectedChildElement



farbeAuswahlen.addEventListener('change', (e) => {
    console.log(e.target.selectedIndex)
    selectedColor = e.target.selectedIndex
    selectedChildElement = farbeAuswahlen.children[selectedColor]
    console.log(selectedChildElement)
})


button.addEventListener('click', (e) => {
    

    selectedChildElement.remove()
    farbeAuswahlen.children[selectedColor].remove()
    /* farbeAuswahlen.remove() */
    /* button.remove() */
})


