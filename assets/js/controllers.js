function copyDataToClipboard() {
    console.log(this);
}

/*
*   Helpers functions
*/
function bind(parents, selector, listener) {
    const nodeList = [];
    [...parents].map(elt => nodeList.push(...elt.querySelectorAll(selector)));
    [...nodeList].map(elt => elt.addEventListener(listener));
}

function unbind(parents, selector, listener) {
    console.log(parents);
    const nodeList = [];
    [...parents].map(elt => nodeList.push(...elt.querySelectorAll(selector)));
    [...nodeList].map(elt => elt.addEventListener(listener));
}

/*
*   Function to cleanly (re)bound controllers listeners
*/
function reloadListeners(selector) {
    // workout root
    const parent = selector ? document.querySelectorAll(selector) : document;
    console.log('reload controllers in element', parent);

    // bind copyToCliboard to copiables elements
    unbind(parent, '[data-copy]', copyDataToClipboard);
    bind(parent, '[data-copy]', copyDataToClipboard);
}

/*
*   When DOM is loaded, bind all listeners
*/
document.addEventListener('DOMContentLoaded', () => {
    reloadListeners();
})
