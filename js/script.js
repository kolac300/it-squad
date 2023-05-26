
const mainSwiper = new Swiper(".swiper-default__main", {
  loop: true,
  spaceBetween: 70,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px

    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  },
}

)

const RewiewsSwiper = new Swiper('.swiper-default_rewiews',
  {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
  });
const swiper = new Swiper('.swiper-default',
  {
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 70,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
  });

const swiper2 = new Swiper('.swiper-style1',
  {

    loop: false,
    slidesPerView: 1,
    spaceBetween: 6,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

let menu_icon = document.querySelector(".menu__icon");
let navigationLinks = [...document.querySelectorAll(".menu__link-mob ")]
let menu_drawer = document.querySelector(".header-mob__container");




const toggleMenu = event => {
  if (navigationLinks.includes(event.target)) {
    menu_drawer.classList.toggle("active");
    menu_icon.classList.toggle("active")
  }
  if (event.target.closest(".menu__icon")) {
    menu_drawer.classList.toggle("active");
    menu_icon.classList.toggle("active")
  }
}

menu_icon.addEventListener("click", toggleMenu);
navigationLinks.forEach(link => {
  link.addEventListener("click", toggleMenu);
});
//hover effect for offers

let offer_items = document.querySelectorAll(".offer-items");
let service_items = document.querySelectorAll(".our-services__info");

const hoverOfferEffect = event => {
  offer_items.forEach(el => {
    if (el == event.target.closest('.offer-items')) {
      el.classList.add('_active');
    } else {
      el.classList.remove('_active');
    }
  });
  let active_offer = document.querySelector('.offer-items._active').dataset.id;
  service_items.forEach(el => {
    el.classList.contains(active_offer) ? el.classList.add('_active') : el.classList.remove('_active');
  });
}


offer_items.forEach(el => el.addEventListener("click", hoverOfferEffect));





//stiky header//

window.addEventListener("scroll", () => {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    document.querySelector('.header').classList.add("sticky");
  } else {
    document.querySelector('.header').classList.remove("sticky");
  }
});

//Portfolio items
let descriptions = {
  vitalgym: {
    images: [
      './img/portfolio/vital1.png',
      './img/portfolio/vital2.png',
      './img/portfolio/vital3.png'
    ],
    name: "Vital Gym",
    description: `● Website Redesign - brought new clients to the owner
    ● QA & Bugfixing
    ● Mobile speed optimization - gave less bounce rate
    ● Created lots of Email Flows & Campaigns & Letters which brought thousands of pounds`,
    date: "Nov 2021",
    tech: "Email & Newsletter , Klaviyo , Front-End Development , Web Development , Shopify Theme , Shopify Templates , Shopify",
    url: "vitalgym.co"
  },
  mybacs: {
    images: [
      './img/portfolio/MyBacs1.png',
      './img/portfolio/MyBacs2.png',
      './img/portfolio/MyBacs3.png'
    ],
    name: "MyBacs",
    description: "Swiss company specializing in the human microbiome.They're selling probiotic products for holistic health and planetary care.",
    date: "April 2022",
    tech: "QA Testing , SEO Setup & Configuration , Recharge , Shopify Theme , Shopify Templates , Shopify SEO , Shopify Plus , JavaScript , SCSS , Liquid , Shopify",
    url: "mybacs.com"
  },
  urbanhome: {
    images: [
      './img/portfolio/urban1.png',
      './img/portfolio/urban1.png',
      './img/portfolio/urban1.png'
    ],
    name: "Beauty Tables",
    description: "",
    date: "OCT 2021",
    tech: "JavaScript , Liquid , Shopify Theme , Shopify Templates , Shopify",
    url: "urbanhome.co"
  },
  knives: {
    images: [
      './img/portfolio/wolf1.jpg',
      './img/portfolio/wolf2.jpg',
      './img/portfolio/wolf3.png'
    ],
    name: "Wolfgangs knives",
    description: "Website conversion rate optimization, ui/ux improvements, theme QA, ST. Patrick's day email and website campaign development (currently live on the theme).",
    date: "April 2023",
    tech: "JavaScript , CSS , Liquid , Shopify Theme , Shopify , Shopify Templates , SEO Setup & Configuration , Website Optimization",
    url: "wolfgangs.de"
  },
  printed: {
    images: [
      './img/portfolio/printed1.png',
      './img/portfolio/printed2.png',
      './img/portfolio/printed3.png'
    ],
    name: "Printed Momories",
    description: "Printed Memories is a company that specializes in creating customized, high-quality photo books and other printed products. The company was founded in 2018 by a group of passionate photographers who wanted to provide a way for people to preserve and showcase their cherished memories in a tangible, long-lasting format.",
    date: "March 2023",
    tech: "Front-End Development , International Development , JavaScript , Shopify Apps , Liquid , Shopify , Shopify SEO , Shopify Templates",
    url: "printedmemories.com"
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
  for (let [key, value] of Object.entries(descriptions)) {
    if (key == current_project) {
      //Update images
      for (let i = 0; i < value.images.length; i++) {
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
  if (event.target.closest('.portfolio__btn-close')) {
    portfolio_description.classList.add('_hidden');
    document.querySelector('.portfolio__container').scrollIntoView({ behavior: 'smooth', block: "start" });
    return;
  } else {
    updateDescriptionInfo(event);
    portfolio_description.classList.remove('_hidden');
    portfolio_description.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}


portfilio_items.forEach(el => el.addEventListener('click', togglePortfolioDescription));
close_description_btn.addEventListener('click', togglePortfolioDescription)




// nav desctop actve link logic 
let allLinks = document.querySelectorAll(".menu__link");
let allSections = document.querySelectorAll(".section--for__link");
document.addEventListener('scroll', () => {
  allSections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log('first', id);
    if (top + 170 >= offset && top < offset + height) {
      allLinks.forEach(link => {
        if (link) {
          link.classList.remove('_active');
        }
      });
      if (id === null) {
        document.querySelector(".menu__link[href='#']").classList.add('_active');
      } else {
        document.querySelector(".menu__link[href='#" + id + "']").classList.add('_active');
      }

    }
  });
});

let switchToDark = document.querySelector('.switch')
let switchToDarkInput = document.querySelector('.switch input')
let body = document.querySelector("body");

switchToDark.addEventListener('click', () => {
  if (switchToDarkInput.checked) {
    switchToDarkInput.checked = false;
    body.classList.toggle("dark");
  } else {
    switchToDarkInput.checked = true;
    body.classList.toggle("dark");
  }


})
