window.onload = function(){
    setIcons()
}

function setIcons(){
    document.querySelector(".mb").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"/></svg>';
    document.querySelector(".se").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"/></svg>';
    document.querySelector(".c").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>';
}

let i = 0;
function shMenu(){
    if (i == 0) {
        document.querySelector(".container").style = "left:200px;right:-200px";
        document.querySelector(".ol").style = "visibility:visible;opacity:1";
        i++;
    } else {
        document.querySelector(".container").style = "left:0px;right:0px";
        document.querySelector(".ol").style = "visibility:hidden;opacity:0;";
        i--;
    }
}
let x = 0;
function shs(){
    if (x == 0) {
        document.querySelector(".s").style = "visibility:visible;opacity:1";
        x++;
    } else {
        document.querySelector(".s").style = "visibility:hidden;opacity:0;";
        x--;
    }
}