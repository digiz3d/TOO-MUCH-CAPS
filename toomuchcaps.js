document.addEventListener("scroll", lowerCaseEverything, false);


function lowerCaseEverything() {
    document.querySelectorAll("#video-title").forEach( function(value, index, listObj ) {
        //value.style.border = "5px solid green";
        value.style.textTransform = "lowercase";
    });
}


//document.getElementById("video-title").style.border = "5px solid red";
console.log("AHH");
