// ==UserScript==
// @name           serpFilter
// @namespace      aumakua
// @version        1.1.2
// @description    Remove crappy yandex zen (and any other sites) from yandex and google search results.
// @description:ru Удаляет ссылки на Яндекс.Дзен (можно добавлять и другие сайты) из результатов поиска гугла и яндекса.
// @author         aumakua
// @license        MIT
// @match          *://*yandex.ru/search*
// @match          *://*google.com/search*
// @grant          none
// ==/UserScript==

(function () {
    'use strict';
    let snippet_id = '';
    let link_id = '';
    const crap = ['zen.yandex.ru', 'zen.yandex.com']; // you can add other crappy sites here

    if (document.location.hostname.includes('yandex')) {
        snippet_id = 'li.serp-item';
        link_id = 'a.link';
    }
    else if (document.location.hostname.includes('google')) {
        snippet_id = 'div.g';
        link_id = 'a';
    }

    const remove_crap = () => {
        const snippets = document.querySelectorAll(snippet_id);
        for (let snippet of snippets) {
            const links = snippet.querySelectorAll(link_id);
            for (let link of links) {
                for (let piece of crap) {
                    if (link.href.includes(piece)) {
                        snippet.style.display = 'none';
                        break;
                    }
                }
            }
        }
    };

    remove_crap();
})();
