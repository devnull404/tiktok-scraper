let VIDEO_ELEMENT_CONTAINER = "video-card default";
let VIDEO_ELEMENT_CONTAINER_AUX = "jsx-1778455663";
let NUM_VIDEOS = document.getElementsByClassName("video-card").length;
var count = 0;
const HEADER = "header-container"

function getVideoLink(num) {
	return document.getElementsByClassName("video-card")[num].childNodes[0].src;
}

let controlsContainer = document.createElement("div");

controlsContainer.id = "controls"
let buttonPrev = document.createElement("button");
buttonPrev.innerHTML = "<"
buttonPrev.id = "prev";
buttonPrev.style.width = "20px"
buttonPrev.style.height = "20px"

let buttonNext = document.createElement("button");
buttonNext.innerHTML = ">"
buttonNext.id = "next";
buttonNext.style.width = "20px"
buttonNext.style.height = "20px"

let downloadButton = document.createElement("button");
downloadButton.id = "download";
downloadButton.style.padding = "10px";

controlsContainer.appendChild(buttonPrev);
controlsContainer.appendChild(downloadButton);
controlsContainer.appendChild(buttonNext);

document.getElementsByClassName(HEADER)[0].appendChild(controlsContainer);


document.getElementById("next").addEventListener("click", nextImage)

function nextImage() {
	document.getElementsByClassName("video-card")[count+1].parentNode.style.border = "3px solid green"
	document.getElementsByClassName("video-card")[count+1].parentNode.focus()
	count += 1;
	document.getElementsByClassName("video-card")[count-1].parentNode.style.border = "none"

}


document.getElementById("prev").addEventListener("click", prevImage)

function prevImage() {
	document.getElementsByClassName("video-card")[count-1].parentNode.style.border = "3px solid green"
	document.getElementsByClassName("video-card")[count-1].parentNode.focus()

	count -= 1;
	document.getElementsByClassName("video-card")[count+1].parentNode.style.border = "none"
}


document.getElementById("download").addEventListener("click", downloadVideo)

function downloadVideo(){
	window.open(getVideoLink(count), "_blank")
}