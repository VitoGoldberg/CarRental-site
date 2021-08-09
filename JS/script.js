//---исчезающая шапка---
let lastScroll = 0;
const defaultOffset = 20;
const header = document.querySelector('.header');

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset) {
    header.classList.remove('hide');
  }
  lastScroll = scrollPosition();
});



//---фиксация навбара и масштабирование лого в навбаре---
window.onscroll = function fixedNavbar() {
  let navbar = document.querySelector('.navbar');
  let logoscale = document.querySelector('.navbar-logo');
  if (window.pageYOffset > 25) {
    navbar.classList.add('navbar__fixed');
    logoscale.classList.add('logo-scaled');
  } else {
    navbar.classList.remove('navbar__fixed');
    logoscale.classList.remove('logo-scaled');
  }
};

/*селект языка
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
  }
};
select();
*/


//---переход по якорям меню---
let anchors = document.querySelectorAll('header a[href*="#"]');
for (anchors of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); //сброс поведения ф-ии по умолчанию
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}



//---рамка на элементах navbar по якорям section---
window.addEventListener('scroll', () => {
  let scrollDistance = scrollY;
  document.querySelectorAll('.section__navigation').forEach((el, i) => {
    if (el.offsetTop - 100 <= scrollDistance) {
      document.querySelectorAll('.navbar-menu > li > a').forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      document.querySelectorAll('.navbar-menu li')[i].querySelector('a').classList.add('active');
    }
  });
});


//---слайдер с преимуществами (Home)---
let offset = 0; //смещение слайдлайна от левого края начальное
const sliderLine = document.querySelector('.car_sliderline')

function offsetIncrease () {
  offset += 650;
  if (offset > 8450) {
    offset = 0;
  }
  sliderLine.style.left = - offset + 'px';
}

document.querySelector('.right_arrow').addEventListener('click', function () {
  offsetIncrease ();
})

document.querySelector('.left_arrow').addEventListener('click', function () {
  offset -= 650;
  if (offset < 0) {
    offset = 8450;
  }
  sliderLine.style.left = - offset + 'px';
})

const rollSlider = () => {
  offsetIncrease ();
}

setInterval(rollSlider, 5000);



//---селект модели---
let selectModel = function () {
  let selectHeader = document.querySelectorAll('.select__model__header');
  let selectItem = document.querySelectorAll('.select__model__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('model__is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select__model'),
          currentText = select.querySelector('.select__model__current');
      currentText.innerText = text;
      select.classList.remove('model__is-active');
  }
};
selectModel();



//---Сокрытие блока "Drop-off"---
let dropOffSwitcClass = document.querySelector('.drop-off__switcher');
let dropOff = document.querySelector('.drop-off_visible');

dropOffSwitcClass.addEventListener('click', () => {
  dropOff.classList.toggle('drop-off_hide');
})



//---Табы с выбором модели---
let models = [
  {model:'VW Golf II 2019', price: '37.40', doors: '4', seats: '5', luggage: '2 Suitcases / 2 Bags', transmission: 'Mechanic', airConditioning: 'Ýes', minAge: '21'},
  {model:'Audi A1 S-Line 2019', price: '70.40', doors: '4', seats: '5', luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'Toyota Camry 13', price: '75.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Mechanic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'BMW 320 ModernLine', price: '100.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'Mervedes-Benz GLK 320', price: '100.40', doors: '4', seats: '5', luggage: '3 Suitcases / 4 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'VW Passat CC 2020', price: '100.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'},  
  {model:'Audi A1 S-Line 2021', price: '80.40', doors: '4', seats: '5', luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'Toyota Camry 14', price: '80.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Mechanic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'BMW 350 ModernLine', price: '100.40', doors:'4' , seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'Mervedes-Benz GLK 380', price: '120.40', doors: '4', seats: '5', luggage: '3 Suitcases / 4 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'VW Passat CC 2021', price: '120.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'Toyota Camry 15', price:'97.40', doors:'4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'VW Golf II 2021', price: '90.40', doors: '4', seats: '5', luggage: '2 Suitcases / 2 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'}, 
  {model:'BMW 380 ModernLine', price: '120.40', doors: '4', seats: '5', luggage: '2 Suitcases / 3 Bags', transmission: 'Automatic', airConditioning: 'Ýes', minAge: '25'},
];

let selectedModel = models[0];
let forwardButton = document.querySelector('#upButton');
let backButton = document.querySelector('#downButton');
let startArr = 0;
let endArr = startArr + 6;

//видимая в табах часть
let visibleCars = models.slice(startArr, endArr);
let tabs = document.querySelectorAll('.model__name');

function reWriteTabs() {
  let i = 0;
  for (tab of tabs) {
    tab.innerHTML = visibleCars[i].model;
    if (tab.textContent === selectedModel.model){
      tab.parentNode.classList.add('models__tab-isactive');
    } else {
      tab.parentNode.classList.remove('models__tab-isactive');
    }
    i++;
  }
}
reWriteTabs();

function triangleSelektor (i) {
  let triangleArr = document.querySelectorAll('.tab_triangle')
  let selectedTriangle = triangleArr[i];
  selectedTriangle.classList.add('.tab_triangle_selected')
}
//перелистывание вниз
downButton.addEventListener('click', function() {
  if (endArr < models.length) {
    startArr++;
    endArr++;
  }
  visibleCars = models.slice(startArr, endArr);
  reWriteTabs();
})
//перелистывание вверх
upButton.addEventListener('click', function() {
  if (startArr > 0) {
    startArr--;
    endArr--;
  }
  visibleCars = models.slice(startArr, endArr);
  reWriteTabs();
})

//определение параметров текущей модели
//при загрузке страницы первый таб-выбранный


//console.log(selectedModel.model);
//.classList.add('models__tab-isactive'); 

let selectedTabs = document.querySelectorAll('.models__tab');

for (itemtab of selectedTabs) {
  itemtab.addEventListener('click', function() {
    changeSelectedModel(this);
    console.log(selectedModel);
  })
}

function changeSelectedModel(selectedTab) {
  selectedModel = models.find(item => item.model == selectedTab.textContent);
  reWriteTabs();
}



//---Слайды с отзывами---
const slides = document.querySelectorAll('.reviews_slide'),
      dots = document.querySelectorAll('.dot');
let indexSlide = 0;

const activeSlideReviews = n => {
  for (slide of slides) {
    slide.classList.remove('slide_visible');
  }
  slides[n].classList.add('slide_visible');
}

const nextSlide = () => {
  if(indexSlide == slides.length - 1) {
    indexSlide = 0;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  } else {
    indexSlide++;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  }
  /*changeNumberStars();*/
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('dot_pressed');
  }
  dots[n].classList.add('dot_pressed');
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    indexSlide = indexDot;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  })
})

setInterval(nextSlide, 4200);

/*окраска звезд
let stars = document.querySelectorAll('.star');
let fiveStar = stars[5];
let fourStar = stars[4];
console.log(stars);
const changeNumberStars = () => {
  switch (indexSlide) {
    case 0 : fiveStarClassSelector();
    break;
    case 1 : stars[5].classList.add('crimson-star');
    break;
    case 2 : stars[5].classList.remove('crimson-star');
    break;
  }
}

function fiveStarClassSelector() {
  if (fiveStar.classList.contains('crimson-star')) {
    fiveStar.classList.remove('crimson-star')
  } else {
    fiveStar.classList.add('crimson-star')
  }
}*/








/*слайды с тачками 
const nextSlide = () => {
  if(indexSlide == slides.length - 1) {
    indexSlide = 0;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  } else {
    indexSlide++;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  }
  console.log(indexSlide);
}
const prevSlide = () => {
  if(indexSlide == 0) {
    indexSlide = slides.length - 1;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  } else {
    indexSlide--;
    activeSlideReviews(indexSlide);
    activeDot(indexSlide);
  }
}
*/

/*zoom логотипа при скролле
const zoomImage = document.querySelector('.logo');
let zoom = 1; //начальный параметр для лого и высоты навбара
const zoomSpeed = 0.1;
document.addEventListener('wheel', function (e) {
  //Первым аргументом в функцию-обработчик события отправляется ссылка на объект события (объект event)
  if (e.deltaY > 0) {
    zoomImage.style.transform = `scale(${(zoom += zoomSpeed)})`;
  } else {
    zoomImage.style.transform = `scale(${(zoom -= zoomSpeed)})`;
  }
}); 

//zoom логотипа при скролле чрз CSS transform
function logoZoomed() {
  const header = document.querySelector('.header');
  if (header.classList.contains('hide')) {
    console.log('header-hide');
    nav.getElementsByClassName('navbar-logo').classList.add('logo-zoomed');
  } else {
    nav.getElementsByClassName('navbar-logo').classList.remove('logo-zoomed');
  }
};*/