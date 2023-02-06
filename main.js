
//! @@@@@@@@@@@@@@@@@@@@@@@@@@ Navbar scrool Event  @@@@@@@@@@@@@@@@@@@
const navBar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    navBar.classList.toggle('navBarScroll',window.scrollY>0);
});



// ! @@@@@@@@@@@@@@@@@@@@@@@ toggle the Nav bar menu @@@@@@@@@@@@@@@@@@@@@@@@@@@
const openMenu=document.querySelector('nav .open-menu-button');
const closeMenu=document.querySelector('nav .close-menu-button');
const navItems=document.querySelector('nav #nav__items');
openMenu.addEventListener('click',()=>{
    openMenu.classList.toggle('close-menu-button');
    closeMenu.classList.toggle('close-menu-button');
    navItems.style.display='flex';
})
closeMenu.addEventListener('click',()=>{
    closeMenu.classList.toggle('close-menu-button');
    openMenu.classList.toggle('close-menu-button');
    navItems.style.display='none';
})


// ! @@@@@@@@@@@@@@@@@@@@@@@@@@@ our swipper js library @@@@@@@@@@@@@@@@@@@@@@
var swiper = new Swiper(".mySwiper", {
    // swipper js uses mobile first responsiveness first
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints
    breakpoints:{
800:{
    slidesPerView: 2,
},
1024:{
    slidesPerView:3,
}
    },
    
  });

  // ! @@@@@@@@@@@@@@@@@@@@@@@@@@@ Hiding by clicking a link @@@@@@@@@@@@@@@@@@@@@@