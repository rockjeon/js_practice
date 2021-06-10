const boxs = document.querySelectorAll('.box')
const btn = document.querySelector('.btn')
const btnBack = document.querySelector('.btn-back')
const btnAdd = document.querySelector('.btn-add')
const container = document.querySelector('.container')
const modalBtn = document.querySelector('.modal-btn')
let toggle = true

boxs.forEach((targetBox)=> {
    targetBox.addEventListener('click', () => {
        if (targetBox.dataset.name === '현금봉투') {
            alert(targetBox.dataset.name)
        } else { 
            alert(`${targetBox.textContent}`)
        }
    })
})

btn.addEventListener('click', () => {
    const targetBox = boxs[0]
    if (toggle == true) {
        targetBox.style.display = 'none'
        btn.innerText = '박스1열기'
        toggle = false
    } else {
        targetBox.style.display = 'flex'
        btn.innerText = '버튼'
        toggle = true
    }
})

btnBack.addEventListener('click', () => {
    if (toggle == true) {
        document.body.style.backgroundColor ='black'
        btnBack.innerText = '화이트모드'
        toggle = false
    } else {
        document.body.style.backgroundColor='white'
        btnBack.innerText = '다크모드'
        toggle = true
    }
})

btnBack.addEventListener('click', () => {
    const container = document.querySelector('.container')
    container.classList.toggle('blue')

})

btnAdd.addEventListener('click', () => {
    const myBox = document.querySelector('.my-box')
    container.appendChild(myBox).classList.add('box')
    setTimeout(() => {
        container.removeChild(myBox)
    },4000)
})

modalBtn.addEventListener('click', openModal)
function openModal() {

    const modalElement = document.createElement('div')
    modalElement.classList.add('modal')
    const innerElement = document.createElement('div')
    innerElement.classList.add('inner')
    innerElement.innerText = "This is modal!!"
    modalElement.appendChild(innerElement)
    document.body.appendChild(modalElement)
    innerElement.addEventListener('click', () => {
    closeModal(modalElement)
})
}

function closeModal(modalElement) {
    document.body.removeChild(modalElement)
}

const dataList = [{
        id: 1,
        name: 'sangwook'
    },
    {
        id: 2,
        name: 'junhee'
    }, {
        id: 3,
        name: 'minjeong'
    },
    {
        id: 4,
        name: 'sungje'
    },
    {
        id: 5,
        name: 'ha-yul'
    },
]
const result = dataList.map((data) => data.name)
const show = document.querySelector('.show')
let dataToggle = false

show.addEventListener('click', () => {
    if(dataToggle == false) {
        const ul = document.createElement('ul')
        ul.classList.add('item-list')
        document.body.appendChild(ul)
        for(const item of result) {
            const itemList = document.createElement('li')
            itemList.className = 'data-list'
            ul.appendChild(itemList).textContent = item    
        }
        show.textContent = 'hidden'
        dataToggle = true
    }else {
        const ul = document.querySelector('.item-list')
        ul.remove()
        show.textContent = 'show'
        dataToggle = false
    }
})