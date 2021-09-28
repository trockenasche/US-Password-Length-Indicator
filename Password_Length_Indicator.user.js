// ==UserScript==
// @name         Password Length Indicator
// @namespace    trockenasche
// @version      2.0
// @description  Indicate password fields that have a maximum length of characters.
// @author       trockenasche
// @homepage     https://github.com/trockenasche/US-Password-Length-Indicator
// @supportURL   https://github.com/trockenasche/US-Password-Length-Indicator/issues
// @updateURL    https://github.com/trockenasche/US-Password-Length-Indicator/raw/main/Password_Length_Indicator.user.js
// @downloadURL  https://github.com/trockenasche/US-Password-Length-Indicator/raw/main/Password_Length_Indicator.user.js
// @include      *
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Three_asterisks.svg/32px-Three_asterisks.svg.png
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.innerHTML = css;
    head.appendChild(style);
}

(function () {
    'use strict';
    var passFields = document.querySelectorAll("input[type='password']");

    if (passFields.length == 0) {
        // Couldn't find any password fields, leaving function.
        return;
    }

    addGlobalStyle(`div.us-pli {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    align-content: flex-end;}`);
    addGlobalStyle(`div.us-pli>span
                    { padding: 0px 1px;
                    color: red;
                    background: yellow;
                    border: 1px solid yellow;
                    align-self: center;`);

    [].forEach.call(passFields, function (passField) {
        if (passField.maxLength > 0) {
            passField.style.border = "2px solid yellow";

            // Add the div before the input field.
            var wrapper = document.createElement('div');
            wrapper.classList.add('us-pli');
            passField.parentNode.insertBefore(wrapper, passField);
            // And move the input field inside the div element.
            wrapper.appendChild(passField);

            // Add the span element with the maxLength value at the end of the input element.
            passField.insertAdjacentHTML('afterend', '<span>' + passField.maxLength + '</span>');
        }
    });

    return;
})

();