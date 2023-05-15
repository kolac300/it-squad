const swiper = new Swiper('.swiper-default', 
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
  
const swiper2 = new Swiper('.swiper-style1', 
{
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-style1 .swiper-pagination',
      clickable : true,
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

//stiky header//

window.addEventListener("scroll", () => {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if(scrollTop > 50){
    document.querySelector('.header').classList.add("sticky");
  }else{
    document.querySelector('.header').classList.remove("sticky");
  }
});

//Portfolio items
let descriptions = {
  vitalgym: {
    images: [
      'http://via.placeholder.com/640x360',
      'http://via.placeholder.com/640x360',
      'http://via.placeholder.com/640x360'
    ],
    name: "Vital Gym",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi id dolore porro nam nemo, omnis a sit architecto aut. Est quisquam voluptatem repudiandae, sequi aliquam quam reiciendis omnis consequuntur?",
    date: "April 2019",
    tech: "HTML5, SCSS, JavaScript",
    url: "vitalgym.co"
  },
  mybacs: {
    images: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360'
    ],
    name: "MyBacs",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi id dolore porro nam nemo, omnis a sit architecto aut. Est quisquam voluptatem repudiandae, sequi aliquam quam reiciendis omnis consequuntur?",
    date: "April 2022",
    tech: "HTML5, SCSS, JavaScript",
    url: "mybacs.com"
  },
  beautytables: {
    images: [
      'https://placekitten.com/640/360',
      'https://placekitten.com/640/360',
      'https://placekitten.com/640/360'
    ],
    name: "Beauty Tables",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi id dolore porro nam nemo, omnis a sit architecto aut. Est quisquam voluptatem repudiandae, sequi aliquam quam reiciendis omnis consequuntur?",
    date: "April 2022",
    tech: "HTML5, SCSS, JavaScript",
    url: "beautytables.co.uk"
  }
}

let portfilio_items = document.querySelectorAll('.portfolio__item');
let portfolio_description = document.querySelector('.portfolio__description-wraper');
let close_description_btn = document.querySelector('.portfolio__btn-close');


const updateDescriptionInfo = event => {
  let description_images = document.querySelectorAll('.portfolio__description-image img');
  let description_name = document.querySelector('.portfolio__description-title');
  let description_info = document.querySelector('.portfolio__description-text_info');
  let description_date = document.querySelector('.portfolio__description-text_date');
  let description_url = document.querySelector('.portfolio__description-text_url');
  let description_tech = document.querySelector('.portfolio__description-text_tech');
  

  let current_project = event.target.closest('.portfolio__item').dataset.project;
  for (let [key, value] of Object.entries(descriptions)){
    if (key == current_project){
      //Update images
      for (let i = 0; i < value.images.length; i++){
        description_images[i].src = value.images[i];
      }
      //Update info
      description_name.textContent = value.name;
      description_info.textContent = value.description;
      description_date.textContent = value.date;
      description_url.textContent = value.url;
      description_tech.textContent = value.tech;
    }
  }
}

const togglePortfolioDescription = event => {
  if (event.target.closest('.portfolio__btn-close')){
    portfolio_description.classList.add('_hidden');
    document.querySelector('.portfolio__container').scrollIntoView({ behavior: 'smooth', block: "start" });
    return ;
  }else{
    updateDescriptionInfo(event);
    portfolio_description.classList.remove('_hidden');
    portfolio_description.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}


portfilio_items.forEach(el => el.addEventListener('click', togglePortfolioDescription));
close_description_btn.addEventListener('click', togglePortfolioDescription)