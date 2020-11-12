const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to videoElement then play

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onLoadedmetadata = () => {
			videoElement.play()
		}
	} catch(error) {
     console.log('whoops, there is a problem with the video', error);
	}
}
 button.addEventListener('click', async () =>{
 	// disable button
 	button.disabled = true;
 	// start picture in picture
 	await videoElement.requestPictureInPicture();
 	// reset button
 	button.disabled = false;
 })

// on load
selectMediaStream();