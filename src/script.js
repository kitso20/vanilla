function searchsubmit(event){
    event.preventDefault()
    let searchinput = document.querySelector(`#searchbutton`)
    let newcity = document.querySelector(`#mcity`)
    newcity.innerHTML = searchinput.value
}
let search = document.querySelector(`#search`)
search.addEventListener(`submit`,searchsubmit)