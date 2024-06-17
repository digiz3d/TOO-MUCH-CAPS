function injectCSS(item) {
    console.log("Injecting CSS with style:", item.ytbTextTransformStyle);
    var ytbTextTransformStyle = item.ytbTextTransformStyle || "lowercase"; // Default to lowercase if undefined
    
    // Define CSS selectors and corresponding text-transform style
    var css = `
        .style-scope.ytd-watch-metadata yt-formatted-string { 
            text-transform: ${ytbTextTransformStyle} !important; 
        }
        h3 a yt-formatted-string,
        .title.style-scope.ytd-video-primary-info-renderer,
        .ytp-title-link.yt-uix-sessionlink.ytp-title-fullerscreen-link,
        .miniplayer-title.style-scope.ytd-miniplayer { 
            text-transform: ${ytbTextTransformStyle} !important; 
        }
    `;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Remove any existing style elements with the same data attribute to avoid duplication
    document.querySelectorAll('style[data-extension-style="toomuchcaps"]').forEach(e => e.remove());

    // Set a data attribute to identify extension's style
    style.setAttribute('data-extension-style', 'toomuchcaps');
    
    // Append style to document head to ensure it applies correctly
    document.head.appendChild(style);
}

function onError(error) {
    console.error(`Error in injecting CSS: ${error}`);
}

console.log("Content script loaded");

// Ensure content script runs when document is ready
document.addEventListener('DOMContentLoaded', function () {
    var getting = browser.storage.sync.get("ytbTextTransformStyle");
    getting.then(injectCSS, onError);
});
