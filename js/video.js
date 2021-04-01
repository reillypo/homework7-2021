var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	if (document.getElementById("volume").innerHTML.trim().length == 0) {
		document.getElementById("volume").innerHTML = "100%";
	}
	else{
		document.getElementById("volume").innerHTML = document.getElementById("volume").innerHTML;
	}

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate += -.05;
	console.log("Slowed down video to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .05;
	console.log("Sped up video to " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime > 15) {
		console.log("Original location " + video.currentTime)
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	}
	else{
		console.log("Original location " + video.currentTime)
		video.currentTime = 0;
		console.log("New location " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	document.getElementById("volume").innerHTML = document.querySelector("#slider").value;
	video.volume = document.getElementById("volume").innerHTML / 100;
	document.getElementById("volume").innerHTML = document.getElementById("volume").innerHTML + "%";
	console.log(video.volume);
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

