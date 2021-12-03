var modal = document.getElementById("myModal");

var btn = document.getElementById("btn");

var close = document.getElementsByClassName("btn_close")[0];

// click button -> open Modal
btn.onclick = function() {
    modal.style.display = "block";
}

// click <span> (x), close Modal
close.onclick = function() {
    modal.style.display = "none";
}

// click anywhere outside of the Modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}