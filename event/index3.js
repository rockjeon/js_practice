const character = document.querySelector('.character')

// character.addEventListener('dragenter', ()=> {
//     console.log('드래그 스타트')
// })
// character.addEventListener('dragover', ()=> {
//     console.log('드래그 드래그')
// })
// character.addEventListener('dragleave', ()=> {
//     console.log('드래그 엔드')
// })

const box = document.querySelector('.box')
box.addEventListener('dragover', (event) => {
    event.preventDefault()
})

box.addEventListener('drop', () => {
    console.log('drop event')
})