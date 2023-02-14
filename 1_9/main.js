const farbeAuswahlen = document.querySelector("#farbeAuswahlen")
const button = document.querySelector("#button")

console.log(farbeAuswahlen.selectedIndex)
farbeAuswahlen.addEventListener('change', () => {
    console.log(farbeAuswahlen.selectedIndex)
})


button.addEventListener('click', (e) => {
    e.preventDefault()
    farbeAuswahlen.remove(farbeAuswahlen.selectedIndex)
})