function injectCSS() {
    let head = document.head || document.getElementsByTagName('head')[0];
    let css = '* { text-transform: lowercase !important; }';
    let style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

window.addEventListener('load', function () {
    injectCSS();
}, true);