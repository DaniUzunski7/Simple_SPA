//ToDo import render, page, classMap, styleMap from node_modules/lit-html || page;
import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js"

// ToDo replace (if needed) with project root element
const root = document.querySelector('main');

function renderer(template){
    render(template, root);
}

export {
    renderer,
    html,
    classMap,
    styleMap,
    page
};