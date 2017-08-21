// ==UserScript==
// @name         YNVN URL Warning
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Fred Onis
// @description  NEVER make a test booking for SKY products
// @homepage
// @homepageURL
// @website
// @source
// @icon
// @iconURL
// @defaulticon
// @icon64
// @icon64URL
// @updateURL
// @downloadURL
// @supportURL
// @include
// @match        https://neckermann.nl/*catalog=YNVN*
// @match        https://neckermann.nl/pax/*catalog=YNVN*
// @match        https://neckermann.nl/customize/*catalog=YNVN*
// @exclude
// @require
// @resource
// @connect
// @run-at
// @grant        none
// @noframes
// @unwrap
// @nocompat
// ==/UserScript==

(function() {
    'use strict';

    alert("We CAN’T cancel SKY bookings (the flights will be charged directly).\r\n So NEVER make a test booking for SKY products. ");
})();