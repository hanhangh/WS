// ==UserScript==
// @name         Worldscale Test
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.worldscale.co.uk/voyages/*
// @icon         https://www.google.com/s2/favicons?domain=worldscale.co.uk
// @grant        none
// ==/UserScript==

(function() {

     window.addEventListener('dblclick', function () {
        var select = document.getElementsByTagName("select")[0];
        var elements = document.getElementsByTagName("select");
        console.log(select);
        console.log(elements);
        if (select) {
            select.options[select.options.length] = new Option('2023', '2023');
            console.log("Document changed!");
        }
    });
})();
