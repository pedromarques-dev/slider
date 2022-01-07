//Get elements of developer in container
const dev = document.getElementsByClassName("developer")
let cont = 0
//Get buttons
const buttonNextImage = document.getElementById('button-next')
const buttonPreviousImage = document.getElementById('button-previous')

function moveToPreviousImage(){
    dev[cont].classList.remove('active')
    cont--
    dev[cont].classList.add("active")
}

function moveToNextImage(){
   dev[cont].classList.remove('active')
   cont++
   dev[cont].classList.add("active")
}
