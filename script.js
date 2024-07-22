document.addEventListener('DOMContentLoaded', (event) => {
    const videos = document.querySelectorAll('.video');
    const videoContainer = document.getElementById('video-container');

    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }

    function playVideo(index) {
        videos.forEach((video, i) => {
            if (i === index) {
                video.style.display = 'block';
                video.play();
            } else {
                video.pause();
                video.style.display = 'none';
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key >= '1' && key <= '5') {
            playVideo(parseInt(key) - 1);
        }
    });

    // Request fullscreen on page load
    requestFullscreen(videoContainer);
});