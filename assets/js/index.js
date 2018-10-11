
const doStuff = () => {
    let theDiv = document.querySelector('#the-div')
    let theList = document.querySelector('#the-list')
    let text = document.querySelector('#the-text')

    const handleClick = () => {
        theDiv.style.backgroundColor = 'blue'
        text.innerHTML = 'changing the text too'
        axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
            let data = result.data
            console.log(data)
            data.forEach(element=>{
                let listItem =  document.createElement('li')
                listItem.innerHTML = element.username
                theList.appendChild(listItem)
            })
        })
    }
    
    text.innerHTML = 'javascript is fun'

    theDiv.addEventListener('click', handleClick)

    console.log('feelin good feelin great')
}

document.addEventListener('DOMContentLoaded', doStuff)
