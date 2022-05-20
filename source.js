




//select all html action items 
var toggle = document.querySelector('.toggle')
var container = document.querySelector('.nav')
//select all html {ul span } items
var spanF = document.querySelector('span.f')
var spanM = document.querySelector('span.m')
var spanL = document.querySelector('span.l')
var AddAnimation = document.querySelector('.animation')
var NavItem = document.querySelectorAll('li a')

var ul_list = document.getElementsByTagName('ul')[0]

toggle.addEventListener("click", () => {
    //you can use import file contain the custom style from folder 
    spanF.classList.toggle('f_')
    spanM.classList.toggle('m_')
    spanL.classList.toggle('l_')
    ul_list.classList.toggle('ul_')
    AddAnimation.classList.toggle('anima')
container.classList.toggle('toggleClass')
container.classList.toggle('imgKeyAnima')
// document.body.style.overflowY = 'hidden'
})

//loop for all nave list items 
NavItem.forEach(item => {
    item.addEventListener("click", () => {
        spanF.classList.toggle('f_')
        spanM.classList.toggle('m_')
        spanL.classList.toggle('l_')
        ul_list.classList.toggle('ul_')
        AddAnimation.classList.toggle('anima')
    container.classList.toggle('toggleClass')
    container.classList.toggle('imgKeyAnima')
    //document.body.style.overflowY = 'auto'
    })
});


window.onscroll = function(){
var home = document.querySelector('#home');
var about = document.querySelector('#about');
var team = document.querySelector('#team');
var contact = document.querySelector('#contact');
var navLinks = document.querySelectorAll('li a');
for(i =0; i< navLinks.length; i++){
navLinks[i].classList.remove('active')
//   console.log(navLinks[i])
}
if(scrollY<=home.offsetTop + 200){
    navLinks[0].classList.add('active')
} else if(scrollY<=about.offsetTop + 200){
    navLinks[1].classList.add('active')
}else if(scrollY<=team.offsetTop + 200){
    navLinks[2].classList.add('active')
}else if(scrollY<=contact.offsetTop + 200){
    navLinks[3].classList.add('active')
}

}




 //   =====================================================
//    =====================================================
//    auther ________AHMED RAGAB________  -_-   -_-  -_-  -_- 😍

//    1__GitHUB
//    https://github.com/Ahmed-Ragap
 
//    2__LinkedIn
//    https://www.linkedin.com/in/ahmed-ragap-2b01b4168/

//    =====================================================
//    =====================================================

 
