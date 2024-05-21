const light=document.querySelector('.btn1')
const dark=document.querySelector('.btn2')
const container=document.querySelector('.container')
const context = document.querySelector('.context')
const slide=document.querySelector('.slide')


dark.addEventListener('click',()=>{
    container.style.backgroundColor='rgba(12, 12, 12,.5)';
    slide.style.left='4.8rem'
    context.style.color='white'
    console.log('merhaba')
})
    
light.addEventListener('click',()=>{
    container.style.backgroundColor='antiquewhite';
    context.style.color='black'
    slide.style.left='0'
    console.log('nasılsın')
})

