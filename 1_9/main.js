const farbeAuswahlen = document.querySelector("#farbeAuswahlen")
const button = document.querySelector("#button")

button.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(farbeAuswahlen.selectedIndex)
    farbeAuswahlen.remove(farbeAuswahlen.selectedIndex)
})