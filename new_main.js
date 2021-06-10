window.addEventListener("keyup", function(e) {
    if (e.key === "s") {
    window.open(document.getElementsByClassName("video-player")[0].src, "_blank");
    document.getElementsByClassName("video-player")[0].parentNode.parentNode.style.border = "3px solid red";
    document.getElementsByClassName("video-player")[0].parentNode.parentNode.style.padding = "3px";
}
})