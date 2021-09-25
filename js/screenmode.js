var screen_doc = document.documentElement;

function FullMode() {
    if (screen_doc.requestFullscreen) 
        screen_doc.requestFullscreen();
    else if (screen_doc.webkitRequestFullscreen) // Chrome, Safari (webkit)
        screen_doc.webkitRequestFullscreen();
    else if (screen_doc.mozRequestFullScreen) // Firefox
        screen_doc.mozRequestFullScreen();
    else if (screen_doc.msRequestFullscreen) // IE or Edge
        screen_doc.msRequestFullscreen();
    }

function NormalMode() {
    if (document.exitFullscreen) 
        document.exitFullscreen();
    else if (document.webkitExitFullscreen) // Chrome, Safari (webkit)
        document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) // Firefox
        document.mozCancelFullScreen();
    else if (document.msExitFullscreen) // IE or Edge
        document.msExitFullscreen();
    }

