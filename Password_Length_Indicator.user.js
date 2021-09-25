// ==UserScript==
// @name         Password Length Indicator
// @namespace    trockenasche
// @version      1.0
// @description  Indicate password fields that have a maximum length of characters.
// @author       trockenasche
// @include      *
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Three_asterisks.svg/32-Three_asterisks.svg.png
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var passFields = document.querySelectorAll("input[type='password']");

    if (passFields.length == 0) {
        // Couldn't find any password fields, leaving function.
        return;
    }
    [].forEach.call(passFields, function (passField) {
        if (passField.maxLength > 0) {
            passField.style.border = "2px solid orange";
        }
    });

    return;
})();