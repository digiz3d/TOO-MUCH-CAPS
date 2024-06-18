function saveOptions() {
    browser.storage.sync.set({
        ytbTextTransformStyle: document.querySelector("#myStyle").value
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#myStyle").value = result.ytbTextTransformStyle || "lowercase";
    }

    function onError(error) {
        console.error(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("ytbTextTransformStyle");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);

// Save options immediately upon change
document.querySelector("#myStyle").addEventListener("change", saveOptions);
