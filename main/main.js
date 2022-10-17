const headerBtnrg = document.querySelector('.header__btnrg')
const registration  = document.querySelector('.registration')
const registrationClose= registration.querySelector('.registration_close')


headerBtnrg.addEventListener('click',()=>{
    registration.style.display = 'flex'
})
registrationClose.addEventListener('click',()=>{
    registration.style.display = 'none'
    console.log(222)
})