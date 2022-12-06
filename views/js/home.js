window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toogle('window-scroll',window.scrollY>100)
})