document.addEventListener("DOMContentLoaded", function () {
  const headerNav = document.querySelector(".header__nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      headerNav.classList.add("colored");
    } else {
      headerNav.classList.remove("colored");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const swipe1r = new Swiper("#swiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper = new Swiper('.partners-slider', {
    direction: 'horizontal', 
    slidesPerView: 3,
    spaceBetween: 10,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
});


DG.then(function () {
  const map = DG.map("map").setView([42.8624, 74.5905], 13);

  const places = [
    { coords: [42.867317, 74.560175], popupText: "г Бишкек Интергельпо, 1 ст10" },
    { coords: [42.857489, 74.597823], popupText: "г Бишкек Льва Толстого, 210" }
  ];

  places.forEach(place => {
    const marker = DG.marker(place.coords)
      .addTo(map)
      .bindPopup(place.popupText);
  });

  map.fitBounds([
    [42.867317 - 0.001, 74.560175 - 0.001],
    [42.857489 - 0.001, 74.597823 + 0.001],
  ]);
});
