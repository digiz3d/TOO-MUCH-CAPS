function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        ytbTextTransformStyle: document.querySelector("#myStyle").value
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#myStyle").value = result.ytbTextTransformStyle || "lowercase";
        var sel = "";
        switch (result.ytbTextTransformStyle || "lowercase") {
            case 'capitalize':
                sel = "#c"
                break;
            case 'uppercase':
                sel = "#u"
                break;
            default:
                sel = "#l"
                break;
        }
        document.querySelector(sel).setAttribute("selected", "selected");
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("ytbTextTransformStyle");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);