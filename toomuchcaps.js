function injectCSS(item) {
    console.log("Injecting CSS with style:", item.ytbTextTransformStyle);
    var ytbTextTransformStyle = item.ytbTextTransformStyle || "lowercase"; // Default to lowercase if undefined
    var css = `
        .style-scope.ytd-watch-metadata yt-formatted-string, 
        .style-scope.ytd-rich-grid-media yt-formatted-string,
        .style-scope.ytd-compact-video-renderer span,
        .style-scope.ytd-rich-grid-slim-media span { 
            text-transform: ${ytbTextTransformStyle} !important; 
        }
    `;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Append style to document element to ensure it applies correctly
    document.documentElement.appendChild(style);
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
