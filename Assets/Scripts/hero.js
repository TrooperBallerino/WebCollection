"use strict";

/*  All functions  */
import { addEventOnElements } from './general.js';
import { tryRequest } from './general.js';

const slider = document.querySelector("[data-slider]");
let time = 0;

const initSlider = function(currentSlider)
{
  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const sliderImage = currentSlider.querySelectorAll("[data-slider-holder]");
  const sliderDesc = currentSlider.querySelectorAll("[data-slider-caption]");

  const sliderLoading = currentSlider.querySelectorAll("[data-slider-loading]");

  addEventOnElements(sliderImage, "mouseover", o => sliderDesc[currentSlidePos].classList.add("active"))
  addEventOnElements(sliderImage, "mouseleave", o => sliderDesc[currentSlidePos].classList.remove("active"))

  let currentSlidePos = 0;
  sliderLoading[currentSlidePos].style.width = "100%";

  const moveSliderItem = o => sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`; 

  const slideNext = function() 
  {
    sliderDesc[currentSlidePos].classList.remove("active");
    sliderLoading[currentSlidePos].style.width = "0";
    if (currentSlidePos >= sliderContainer.childElementCount - 1) 
    { 
      currentSlidePos = 0;
    }
    else { currentSlidePos++ }

    time = 0;
    moveSliderItem();
    sliderLoading[currentSlidePos].style.width="100%";
  }

  const slidePrev = function() 
  {
    sliderDesc[currentSlidePos].classList.remove("active");
    sliderLoading[currentSlidePos].style.width = "0";
    if (currentSlidePos <= 0) 
    { 
      currentSlidePos = sliderContainer.childElementCount - 1;
    }
    else { currentSlidePos-- }

    time = 0;
    moveSliderItem();
    sliderLoading[currentSlidePos].style.width = "100%";
  }

  sliderNextBtn.addEventListener("click", slideNext);
  sliderPrevBtn.addEventListener("click", slidePrev);

  if(sliderContainer.childElementCount <= 0)
  { 
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

  /*  Automatic  */
  const timeControl = o => { if(time === 8) slideNext(); }


  setInterval(o => time++, 1000)
  setInterval( timeControl, 1000)
}

/*  Set Props with Data  */

let requestResponse;
const slider_items = slider.querySelectorAll("[data-slider-item]");

function setSliderProps(requestResponse) 
{
  for(let i = 0; i < slider_items.length; i++)
  {
    let str1 = requestResponse[i].Artist.replace(/ +/g, "");
    let str2 = requestResponse[i].Name.replace(/ +/g, "");
    let address = str1.charAt(0).toLowerCase() + str1.slice(1) + "-" + str2.charAt(0).toLowerCase() + str2.slice(1);
    (slider_items[i].querySelector("[data-slider-img]")).src = `./Assets/Images/records/${address}.jpg`;
    (slider_items[i].querySelector("[data-slider-img]")).alt = requestResponse[i].Name;
    (slider_items[i].querySelector("[data-slider-album-name]")).textContent = requestResponse[i].Name;
    (slider_items[i].querySelector("[data-slider-artist-name]")).textContent = requestResponse[i].Artist;
    (slider_items[i].querySelector("[data-slider-album-genre]")).textContent = requestResponse[i].Genre;
    (slider_items[i].querySelector("[data-slider-album-format]")).textContent = requestResponse[i].MacroFormat + " " + requestResponse[i].Format;
    (slider_items[i].querySelector("[data-slider-album-label]")).textContent = requestResponse[i].Label;
    (slider_items[i].querySelector("[data-slider-album-description]")).textContent = requestResponse[i].Description;
  };
}


tryRequest( setSliderProps );
initSlider(slider);




