const swiper = new Swiper('.swiper', 
{
    loop: true,
    slidesPerView: 3,
    spaceBetween: 70,
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  
  let menu_icon = document.querySelector(".menu__icon");

  let menu_drawer = document.querySelector(".header-mob__container");



  const toggleMenu = event => {
    if (event.target.closest(".menu__icon")){
        menu_drawer.classList.toggle("active");
        menu_icon.classList.toggle("active")
    }
  }

  menu_icon.addEventListener("click",toggleMenu);

//hover effect for offers

let offer_items = document.querySelectorAll(".offer-items");
let service_items = document.querySelectorAll(".our-services__info");

const hoverOfferEffect = event =>{
  offer_items.forEach(el => {
    if(el == event.target.closest('.offer-items')) {
      el.classList.add('_active');
    }else {
      el.classList.remove('_active');
    }
  });
  let active_offer = document.querySelector('.offer-items._active').dataset.id;
  console.log(active_offer.length)
  service_items.forEach(el => {
    el.classList.contains(active_offer) ? el.classList.add('_active') : el.classList.remove('_active');
  });

}


offer_items.forEach(el=>el.addEventListener("click",hoverOfferEffect));

const input = document.querySelector("input");
const body = document.querySelector("body");

const toggleThemeMode = () => {
  body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;