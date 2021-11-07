const submit = document.querySelector('.submit')


submit.addEventListener('click', () => {
    
    const input1 = document.querySelector('.input1')
    const input2 = document.querySelector('.input2')

    let out1 = document.querySelector('.out1')
    let out2 = document.querySelector('.out2')
    
    out1.innerText = input1.value
    out2.innerText = input2.value
    

    window.localStorage.setItem('username', input1.value)
    window.localStorage.setItem('password', input2.value)
})