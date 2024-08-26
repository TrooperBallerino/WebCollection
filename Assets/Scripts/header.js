"use strict";

import { addEventOnElements } from './general.js'
import { tryRequest } from './general.js';

const navbar = document.querySelector("[data-navbar]");

/*  Toggle Navbar  */
const toggleItems = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function()
{
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(toggleItems, "click", toggleNavbar);

/*  Calculate Stats  */
function getStats(requestResponse) 
{
  let vin = 0, cd = 0, cas = 0;
  (navbar.querySelector("[data-stats-total]")).textContent =  requestResponse.length;

  for(let i = 0; i < requestResponse.length; i++)
  {
    if(requestResponse[i].MacroFormat === "Vinyl") { vin++; }
    if(requestResponse[i].MacroFormat === "Cassette") { cas++; }
    if(requestResponse[i].MacroFormat === "CD") { cd++; }
  }

  (navbar.querySelector("[data-stats-vinyl]")).textContent =  vin;
  (navbar.querySelector("[data-stats-cassette]")).textContent =  cas;
  (navbar.querySelector("[data-stats-compact]")).textContent =  cd;
}

tryRequest(getStats);