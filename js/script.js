/* Created by: Titus diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-02-html/sw.js", {
    scope: "/ICS2O-Unit-6-02-html/",
  })
}

/**
 * Input.
 */

/**
 * Input
 */

 function updateCount() {
  if (localStorage.clicks) {
    document.getElementById("output").innerHTML = "Cookies: " + localStorage.clicks
  } else {
    localStorage.clicks = 0
  }
}
/**
 * Resets the click counter
 */
function resetCookies() {
  localStorage.clicks = 0
  updateCount()
}

/**
 * Adds 1 to the counter
 */
function getCookies() {
  localStorage.clicks++
  updateCount()
}
