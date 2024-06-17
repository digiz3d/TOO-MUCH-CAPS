function injectCSS(item) {
    var ytbTextTransformStyle = "lowercase";
    if (item.ytbTextTransformStyle) {
        ytbTextTransformStyle = item.ytbTextTransformStyle;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var css = '#video-title,\
    .title.style-scope.ytd-video-primary-info-renderer,\
    .ytp-title-link.yt-uix-sessionlink.ytp-title-fullerscreen-link,\
    .miniplayer-title.style-scope.ytd-miniplayer { text-transform: ' + ytbTextTransformStyle + ' !important; }';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

window.addEventListener('load', function () {
    var getting = browser.storage.sync.get("ytbTextTransformStyle");
    getting.then(injectCSS, onError);
}, true);

function onError(error) {
    console.log(`Error: ${error}`);
}