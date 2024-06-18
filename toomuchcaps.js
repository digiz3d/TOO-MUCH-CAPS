function injectCSS(item) {
    var ytbTextTransformStyle = item.ytbTextTransformStyle || "lowercase"; // Default to lowercase if undefined
    var css = `
        yt-formatted-string.style-scope.ytd-watch-metadata,
        yt-formatted-string.style-scope.ytd-rich-grid-media,
        span.style-scope.ytd-compact-video-renderer,
        span.style-scope.ytd-rich-grid-slim-media,
        span.style-scope.ytd-reel-item-renderer, 
        .ytp-title-link.yt-uix-sessionlink.ytp-title-fullerscreen-link,
        .miniplayer-title.style-scope.ytd-miniplayer{ 
            text-transform: ${ytbTextTransformStyle} !important; 
        }
    `;

    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));

    // Append style to document element to ensure it applies correctly
    document.documentElement.appendChild(style);
}

function onError(error) {
    console.error(`Error in injecting CSS: ${error}`);
}

// Ensure content script runs when document is ready
document.addEventListener('DOMContentLoaded', function () {
    var getting = browser.storage.sync.get("ytbTextTransformStyle");
    getting.then(injectCSS, onError);
});
