document.addEventListener('DOMContentLoaded', () => {

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
      pagination: {
        el: '.swiper-pagination_rewiews',
        clickable: true,
      },
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
        el: '.swiper-pagination-default',
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
        el: '.swiper-pagination-style1',
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
        './img/portfolio/Bru1.png',
        './img/portfolio/Bru2.png',
        './img/portfolio/Bru3.png'
      ],
      name: "BRU",
      description: `BRU machines are known for their sleek design, ease of use, and quality of construction. They offer a variety of features, including programmable settings, and multiple cup sizes. The project goals involve a website redesign with, multicurrency, and multilanguage capabilities using Shopify Markets !`,
      date: "Apr 2023",
      tech: "Shopify , International Development , JavaScript , Liquid , Front-End Development , HTML , Search Engine Optimization , Shopify SEO , Shopify Templates , International Sales",
      url: "bru.shop"
    },
    mybacs: {
      images: [
        './img/portfolio/MyBacs1.png',
        './img/portfolio/MyBacs2.png',
        './img/portfolio/MyBacs3.png'
      ],
      name: "mybacs®",
      description: `mybacs® is a Swiss company specializing in the human microbiome.They're selling probiotic products for holistic health and planetary care. 
      They came to us to improve their Shopify website UX & speed, launch new swiss-localizated store and get new customers.
      All steps gave to the company higher reputation in the Health & Beauty industry, brought new customers & followers and increased monthly revenue.`,
      date: "Jun 2022",
      tech: "QA Testing , SEO Setup & Configuration , Recharge , Shopify Theme , Shopify Templates , Shopify SEO , Shopify Plus , JavaScript , SCSS , Liquid , Shopify",
      url: "mybacs.com"
    },
    urbanhome: {
      images: [
        './img/portfolio/davichio1.png',
        './img/portfolio/davichio2.png',
        './img/portfolio/davichio3.png'
      ],
      name: "Davie and Chiyo",
      description: "The client came to us with an issue with low conversion and we had only 20 hours to define the main problems and fix them.",
      date: "OCT 2021",
      tech: "JavaScript , Liquid , Shopify Theme , Shopify Templates , Shopify",
      url: "davieandchiyo.com"
    },
    knives: {
      images: [
        './img/portfolio/wolf1.png',
        './img/portfolio/wolf2.png',
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
  let up_scroll_btn = document.querySelector('.up_scroll_btn__wrapper');


  document.addEventListener('scroll', () => {

    allSections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
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
    if (window.scrollY <= 0) {
      up_scroll_btn.style.display = "none"
    } else {
      up_scroll_btn.style.display = "block"
    }

  });

  // dark mode swithcer logi
  let switchToDark = document.querySelector('.switch')
  let switchToDarkInput = document.querySelector('.switch input')
  let body = document.querySelector("body");
  let html = document.querySelector("html");

  switchToDark.addEventListener('click', () => {
    if (switchToDarkInput.checked) {
      switchToDarkInput.checked = false;
      body.classList.remove("dark");
    } else {
      switchToDarkInput.checked = true;
      body.classList.add("dark");
    }
  })



  //// nabmer increesing animation
  const counters = document.querySelectorAll('.number__list__element h3 span');
  const container = document.querySelector('#number-sec');

  let active = false
  document.addEventListener('scroll', () => {
    if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && !active) {
      counters.forEach(counter => {
        counter.innerText = 0
        let count = 0;
        function updateCount() {
          const targer = parseInt(counter.dataset.count)
          if (count < targer) {
            if (counter.id === "happy_clients") {
              count += 15
            } else {
              count += 1
            }
            counter.innerText = count
            setTimeout(updateCount, 20)
          } else {
            counter.innerText = targer
          }
        }
        updateCount()
        active = true
      })

    }
  })



  /// pop ups logic
  const pop_ups = document.querySelectorAll(".pop_up")

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === "Escape") {
      pop_ups.forEach(el => {
        el.style.display = "none"
      })
    }
  });


  pop_ups.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList && e.target.classList.contains('pop_up')) {
        e.target.style.display = "none"
      }
    })
  });
  const readMoreList = document.querySelectorAll("a.button__arrow")
  readMoreList.forEach(readMoreListEl => {
    readMoreListEl.addEventListener('click', () => handleReadMore(readMoreListEl.dataset.read))
    function handleReadMore(id) {
      const current_pop_up = document.querySelector(`.${id}`)
      if (current_pop_up && current_pop_up.style.display !== "block")
        document.querySelector(`.${id}`).style.display = "block";
    }
  });

  // const cursorRounded = document.querySelector('.rounded');
  // const cursorPointed = document.querySelector('.pointed');

  // const moveCursor = (e)=> {

  //   const mouseY = e.clientY;
  //   const mouseX = e.clientX;
  //   console.log('first', mouseY)
  //   console.log('first', mouseX)
  //   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  //   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  // }

  // window.addEventListener('mousemove', moveCursor)

})
