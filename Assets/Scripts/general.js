"use strict";

/*  Add Event Listener to an Array of elements  */
function addEventOnElements (elements, eventType, callback)
{
  for(let i = 0; i < elements.length; i++)
  {
    elements[i].addEventListener(eventType, callback);
  }
}

/*  Import Data From a JSON File  */

const requestURL = './Assets/Scripts/Data/records.json'
let requestResponse;

const tryRequest = function(callback)
{
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', requestURL, true);

  xhr.onreadystatechange = () => {

    if (xhr.readyState === XMLHttpRequest.DONE) {
      const status = xhr.status;
      if (status === 0 || (200 <= status < 400)) 
      {
        requestResponse = xhr.response;
        callback(requestResponse);
      } 
      else { console.log("error (Promise internal)"); }
    }
  };

  xhr.send();
}

export { addEventOnElements, tryRequest };
