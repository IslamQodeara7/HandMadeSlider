var imgs = Array.from(document.querySelectorAll(".item img"));
var outBox = document.getElementById("outBox");
var innerBox = document.getElementById("innerBox");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
        outBox.style.display = "flex";
        var imgSrc = event.target.getAttribute("src");
        innerBox.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgs.indexOf(event.target);
    })

}

next.addEventListener("click", nextElement);

function nextElement() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }

    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgSrc})`;

}
prev.addEventListener("click", prevElement);

function prevElement() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgSrc})`;
}

close.addEventListener("click", closeElement);

function closeElement() {
    outBox.style.display = "none";
}

document.addEventListener("keyup", function (event) {
    if (event.code == "ArrowRight") {
        nextElement();
    }
    else if (event.code == "ArrowLeft") {
        prevElement();
    }
    else if (event.code == "Escape") {
       closeElement();
    }
})