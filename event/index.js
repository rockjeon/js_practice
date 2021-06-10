const text = document.querySelector('.text')
const balloon = document.querySelector('.balloon')


text.addEventListener('selectstart', () => {
    text.addEventListener('mouseup', (event)=> {
        const content = '그녀를...'
        const selectionText = window.getSelection().toString()
        if(selectionText.length > 0) {
            balloon.innerHTML = content
            balloon.classList.add('on')
            balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`
            balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`
        }
    })
})

balloon.addEventListener('click', removePopup)
function removePopup() {
    balloon.classList.remove('on')
}