/* abre e fecha menu quando clica no icone: x  e menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  element.addEventListener('click', function() { // funcao anonima sem nome
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder a paleta */ 

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
  
  if(window.scrollY >= navHeight){
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  }else{
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS SLIDER CAROUSEL */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, /* só quero ver 1 slide por vez*/
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});


/* SCROLLREVEAL  mostrar elementos quando der scrool na pagina*/

const scrollReveal = ScrollReveal({
  oringin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials 
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,{interval: 100})


  /* BUTTON BACK-TO-TOP */
  const backToTopButton = document.querySelector('.back-to-top')

  function backToTop(){
    
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show')
    }else{
      backToTopButton.classList.remove('show')
    }
  }

  

  /* menu ativo conforme sessão da pagina */
  const sections = document.querySelectorAll('main section[id]')

  function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')


      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if(checkpointStart && checkpointEnd) {
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
      }else {
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
      }
    }
  }



  /* WHEN SCROLL*/
  
  window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })