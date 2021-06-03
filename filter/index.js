const dataList = [
    {name:'name1',age:18},
    {name:'name2',age:27},
    {name:'name3',age:32},
    {name:'name4',age:41},
    {name:'name5',age:51},

]
function showList() {
    let list = ''
    for (const data of dataList) {
        list += `<li> ${data.name} :${data.age}</li>`
    }
    document.querySelector('.users-list').innerHTML = list
}
showList()

document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click',(event) => {
        onClickButton(event)
    })
})

function onClickButton(event) {
    const targetAge= event.target.dataset.age
    const filterdList = dataList.filter((data)=> data.age >= targetAge )
    updateList(filterdList)
}

function updateList(filterdList) {
    let listHtml = ''
    for(const data of filterdList) {
        listHtml += `<li>${data.name} : ${data.age}</li>`
    }
    document.querySelector('.users-list').innerHTML = listHtml
}
