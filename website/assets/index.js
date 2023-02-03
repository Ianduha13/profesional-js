const video = document.querySelector("video")
const button = document.querySelector("button")

function mediaPlayer(config) {
	this.media = config.el
}

mediaPlayer.prototype.play = function () {
	this.media.play()
}

mediaPlayer.prototype.pause = function () {
	this.media.pause()
}

mediaPlayer.prototype.togglePlay = function () {
	if (this.media.paused) {
		this.play()
	} else {
		this.pause()
	}
}

const player = new mediaPlayer({ el: video })
const isPlaying = player.paused

button.onclick = () => player.togglePlay()
