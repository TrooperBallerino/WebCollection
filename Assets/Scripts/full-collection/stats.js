"use strict";

import { tryRequest } from '../general.js'

/*  Get Stats  */
const stats = document.querySelector("[data-stats-holder]");

function getStats(requestResponse) 
{
  let vin = 0, cd = 0, cas = 0;
  (stats.querySelector("[data-stats-total]")).textContent =  requestResponse.length;

  for(let i = 0; i < requestResponse.length; i++)
  {
    if(requestResponse[i].MacroFormat === "Vinyl") { vin++; }
    if(requestResponse[i].MacroFormat === "Cassette") { cas++; }
    if(requestResponse[i].MacroFormat === "CD") { cd++; }
  }

  (stats.querySelector("[data-stats-vinyl]")).textContent =  vin;
  (stats.querySelector("[data-stats-cassette]")).textContent =  cas;
  (stats.querySelector("[data-stats-compact]")).textContent =  cd;
}

tryRequest(getStats);