var message = "Sorry, right-click has been disabled";

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false")





function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();

        img1.src = "images/thumbnails/1c.jpg";
        img2.src = "images/thumbnails/3c.jpg";
        img3.src = "images/thumbnails/4c.jpg";
        img4.src = "images/thumbnails/5c.jpg";
        img5.src = "images/thumbnails/6c.jpg";
        img6.src = "images/thumbnails/7c.jpg";
        img7.src = "images/thumbnails/8c.jpg";
        img8.src = "images/thumbnails/9c.jpg";
        img9.src = "images/thumbnails/10c.jpg";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);