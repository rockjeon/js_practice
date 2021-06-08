const dataList = [
    {name:'name1',age:18},
    {name:'name2',age:27},
    {name:'name3',age:32},
    {name:'name4',age:41},
    {name:'name5',age:51},

]


function showList(filterdList) {
    if(filterdList) {
        let list = ''
            for(const data of filterdList){
                list += `<li>${data.name}:${data.age}</li>`        
            }
            document.querySelector('.users-list').innerHTML = list
    } else {
        let list = ''
        for(const data of dataList){
            list += `<li>${data.name}:${data.age}</li>`        
        }
        document.querySelector('.users-list').innerHTML = list

    }
}
showList()

document.querySelectorAll('button').forEach(element =>{
    element.addEventListener('click',(event)=> {
        onClick(event)
    })
})

function onClick(event) {
    const targetAge = event.target.dataset.age
    const filterdList = dataList.filter((data)=> data.age >= targetAge)
    showList(filterdList)
}
const array = [['a','b','c'],['r','g']]
const flattenedArray = array.reduce((pre, cur) => {
	return pre.concat(cur)
})


const arr = [
    {id:10, name:'사자'},
    {id:1, name:'호랑이'},
    {id:2, name:'기린'}
]

