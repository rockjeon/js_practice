const btn = document.querySelector('.full-btn')
const btnExit = document.querySelector('.btn-exit')
btn.addEventListener('click', (event) => {
    myRequestFullScreen(document.body)
})

function myRequestFullScreen(element) {
    if(element.requestFullScreen) {
        element.requestFullScreen()
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
    } else if (element.mozRequestScreen) {
        element.mozRequestFullScreen()
    } else if (element.msRequestFullScreen) {
        element.msRequestFullScreen()
    }
} 

btnExit.addEventListener('click', (event)=> {
    myCancelFullScreen()
})

function myCancelFullScreen() {
    if(document.exitFullScreen ){
        document.exitFullScreen()
    } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.msCancelFullScreen){
        document.msCancelFullScreen()
    }
}