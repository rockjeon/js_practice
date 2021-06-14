const copy = document.querySelector('#copy')
copy.addEventListener('click', () => {
    if(copy.checked == true) {
        document.querySelector('#shippingName').value = document.querySelector('#billingName').value
        
    }else {
        document.querySelector('#shippingName').value = ''
    }
})