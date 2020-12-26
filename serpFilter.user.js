// ==UserScript==
// @name         serpFilter
// @namespace    aumakua
// @version      0.7
// @description  remove crappy yandex zen (and any other sites) from yandex and google search output
// @author       aumakua
// @include      *yandex.ru/search*
// @include      *google.com/search*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
    'use strict';
    let serp_id = '';
    let a_id = '';
    const garbage = ['zen.yandex.ru']; // you can add other crappy sites here

    if (document.location.hostname.includes('yandex')) {
        serp_id = 'li.serp-item';
        a_id = 'a.link';
    }
    else if (document.location.hostname.includes('google')) {
        serp_id = 'div.g';
        a_id = 'a';
    };

    const remove_crap = () => {
        const serps = document.querySelectorAll(serp_id);
        for (let serp of serps) {
            const link = serp.querySelector(a_id);
            for (let crap of garbage) {
                if (link.href.includes(crap)) {
                    serp.remove();
                }
            }
        }
    };

    remove_crap();
})();