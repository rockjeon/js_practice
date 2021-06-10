let enableMouseWheel = true;

document.querySelector('#mouseWheelToggle').addEventListener('click', (event)=> {
    enableMouseWheel = event.target.checked === false
})

document.querySelector('.scrollable-element').addEventListener('wheel', (event) => {
    if (enableMouseWheel === true) {
        return
    }
    event.preventDefault();
})