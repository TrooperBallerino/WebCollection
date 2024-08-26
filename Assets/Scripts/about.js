"use strict";

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];
const initAccordion = function(currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandedAccordion = function()
  {
    if(lastActiveAccordion && lastActiveAccordion != currentAccordion)
    {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandedAccordion)
}

for( let i = 0; i < accordions.length; i++) { initAccordion(accordions[i]); }