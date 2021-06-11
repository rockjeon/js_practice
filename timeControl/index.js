async function load() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const obj = await data.json()
    const userId = obj.filter(result => result.userId === 1)
    show(userId)
}

function show(userId) {
    userId.forEach(element => {
        const id = element.id
        const userId = element.userId
        const title = element.title
        const body = element.body
        });
    
}
load()






