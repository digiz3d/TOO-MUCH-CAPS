function debug(text) {
    //console.log(text);
    return false;
}

function lowerCaseVideoTitles() {
    debug("+++++ lowerCaseVideoTitles()");
    document.querySelectorAll("#video-title, .title.ytd-video-primary-info-renderer, .ytp-title-link.yt-uix-sessionlink, .ytp-videowall-still-info-title, .ytp-upnext-title").forEach(function(value, index, listObj) {
        lowerCaseThis(value);
    });
}

function lowerCaseThis(element) {
    element.style.textTransform = "lowercase";
}


window.addEventListener("yt-page-data-updated", function() {
    debug("yt-page-data-updated");
    lowerCaseVideoTitles();
});
window.addEventListener("shown-items-changed", function() {
    debug("shown-items-changed");
});
window.addEventListener('load', function() {
    debug("load");
    lowerCaseVideoTitles();
}, true);

window.addEventListener('yt-action', function() {
    debug("yt-action");
    lowerCaseVideoTitles();
}, true);
window.addEventListener('yt-load-next-continuation', function() {
    debug("yt-load-next-continuation");
    lowerCaseVideoTitles();
}, true);
window.addEventListener('yt-load-reload-continuation', function() {
    debug("yt-load-reload-continuation");
    lowerCaseVideoTitles();
}, true);
window.addEventListener('shown-items-changed', function() {
    debug("shown-items-changed 2");
    lowerCaseVideoTitles();
}, true);

debug("TOO MUCH CAPS loaded.");
