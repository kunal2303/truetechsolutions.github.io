//========================================= for nav ==============================================
window.addEventListener('scroll',function(){
    var header=this.document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100)
})

//========================================== animation ===========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//========================================= for Auto Scroll nav ==============================================

const section=document.querySelector('section')
const navLink=document.querySelector('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



//========================================= for Text change ==============================================
var type= new Typed('.textline',{
    strings:["Web Development","Android App Development","Video Editing","Photo Editing","Social Media Marketing","Content Writing"],
    typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
})
