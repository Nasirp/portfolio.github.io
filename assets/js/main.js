/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "dhanuraja70@gmail.com",
        Password : "Nasir@12345",
        To : 'nh246nasir@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact  form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
/* <div class="pdf-container">
<i class="fa fa-file-pdf-o" style="font-size:48px;color:rgb(255, 60, 0)"></i>
<button class="btn btn-primary mb-3" id="pdf-button">open</button> */

const btn = document.querySelector("button");
const flag=0;
btn.addEventListener("click", function(){
    if(flag==0){
      
        
        flag=1;
      }
      else{
        btn.href="C:\Users\nh246\Desktop\githubnew\portfolio.github.io\a", target="blank";
        
      }
})
