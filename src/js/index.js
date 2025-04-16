// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);



window.onload = ()=> {

    if (isIE || isEdge || isEdgeChromium) {
        alert("Please try to access us from another browser (Eg:'Google Chrome, 'Firefox')");
    }
}