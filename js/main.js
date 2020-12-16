
/*---------- Responsive variable -------------*/
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    },
}





/*----------------- Hamburger Menu ------------------------  */

const hamburgerMenu = document.querySelector('#hamburgerMenu');

hamburgerMenu.addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('collapse');
});

/*-------x--------- Hamburger Menu ------------x-----------  */


$(document).ready(function () {



    /*---------- Initialize owl-carousel ------------------------*/

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    /*---------x------ Initialize owl-carousel ------------x-----------*/




    /*---------------- Click to scroll top -------------------------*/

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    /*---------x------ Click to scroll top ------------x------------*/
});

