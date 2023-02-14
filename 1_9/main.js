const farbeAuswahlen = document.querySelector("#farbeAuswahlen")
const button = document.querySelector("#button")

farbeAuswahlen.addEventListener('change', () => {
    console.log(farbeAuswahlen.selectedIndex)
})


button.addEventListener('click', (e) => {
    e.preventDefault()
    farbeAuswahlen.remove(farbeAuswahlen.selectedIndex)
})