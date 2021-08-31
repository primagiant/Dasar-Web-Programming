const navOpen = document.querySelector('.nav-open')
const navClose = document.querySelector('.nav-close')
const navMenu = document.querySelector('.nav-toggle')

navOpen.addEventListener('click', function(){
    navMenu.classList.add('show')
})

navClose.addEventListener('click', function(){
    navMenu.classList.remove('show')
})

$('.nav-link').on('click', function(e){
    let href = $(this).attr('href');
    let elementHref = $(href);
    
    navMenu.classList.remove('show')

    $("html,body").animate({
        scrollTop: elementHref.offset().top - 50
    }, 500, 'easeInOutExpo')

    e.preventDefault()
})