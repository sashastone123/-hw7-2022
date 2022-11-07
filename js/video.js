var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.90;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.90;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	}
	else{
		video.currentTime +=10;
	}
	console.log("video playback skipped to " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (mute.textContent == 'Mute') {
		video.muted = true;
		mute.textContent = 'Unmute'
	}
	else{
		video.muted = false;
		mute.textContent = 'Mute'
	}
	
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value + "%";

});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool") 
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool") 
});