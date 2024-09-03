if(document.title == 'Home | Healthy Horizons'){
    document.querySelector("#nav > div.section.nav-sections > div > ul > li:nth-child(1) > a").style.fontWeight="bold"
}


function dotcolor() {
    try {
        let currentSlide = 0;
        let slide = document.querySelectorAll(".mySlides");
        for (let i = 0; i < 3; i++) {
            if (slide[i].style.display == "block") {
                currentSlide = i;
            }
        }

        if (currentSlide == 0) {
            document.querySelector("#dot1").style.backgroundColor = "#717171";
            document.querySelector("#dot2").style.backgroundColor = "#bbb";
            document.querySelector("#dot3").style.backgroundColor = "#bbb";
        }

        else if (currentSlide == 1) {
            document.querySelector("#dot2").style.backgroundColor = "#717171";
            document.querySelector("#dot1").style.backgroundColor = "#bbb";
            document.querySelector("#dot3").style.backgroundColor = "#bbb";
        }

        else if (currentSlide == 2) {
            document.querySelector("#dot3").style.backgroundColor = "#717171";
            document.querySelector("#dot1").style.backgroundColor = "#bbb";
            document.querySelector("#dot2").style.backgroundColor = "#bbb";
        }

    } catch (e) {
        console.log("Error in Dot Highliter")
    }
}

function next() {
    let currentSlide = 0;
    let prevSlide = 0;
    let nextSlide = 0;
    let slide = document.querySelectorAll(".mySlides");
    for (let i = 0; i < 3; i++) {
        if (slide[i].style.display == "block") {
            currentSlide = i;
        }
    }

    if (currentSlide == 0) {
        prevSlide = 2;
        nextSlide = 1;
    }
    else if (currentSlide == 1) {
        prevSlide = 0;
        nextSlide = 2;
    }
    else if (currentSlide == 2) {
        prevSlide = 1;
        nextSlide = 0;
    }
    document.querySelectorAll(".mySlides")[currentSlide].style.display = "none";
    document.querySelectorAll(".mySlides")[nextSlide].style.display = "block";
    document.querySelectorAll(".mySlides")[prevSlide].style.display = "none";
}

function prev() {
    var currentSlide = 0;
    var prevSlide = 0;
    var nextSlide = 0;
    var slide = document.querySelectorAll(".mySlides");
    for (let i = 0; i < 3; i++) {
        if (slide[i].style.display == "block") {
            currentSlide = i;
        }
    }

    if (currentSlide == 0) {
        prevSlide = 2;
        nextSlide = 1;
    }
    else if (currentSlide == 1) {
        prevSlide = 0;
        nextSlide = 2;
    }
    else if (currentSlide == 2) {
        prevSlide = 1;
        nextSlide = 0;
    }

    document.querySelectorAll(".mySlides")[currentSlide].style.display = "none";
    document.querySelectorAll(".mySlides")[nextSlide].style.display = "none";
    document.querySelectorAll(".mySlides")[prevSlide].style.display = "block";
}

dotcolor();
try {
    document.querySelector("a.next").addEventListener("click", function () {
        next();
        dotcolor();
    })
    document.querySelector("a.prev").addEventListener("click", function () {
        prev();
        dotcolor();
    })
} catch (e) {
    console.log("No Previous / Next Button Found")
}

try {
    document.querySelector("#dot1").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "block";
        document.querySelectorAll(".mySlides")[1].style.display = "none";
        document.querySelectorAll(".mySlides")[2].style.display = "none";
        dotcolor();
    })
    document.querySelector("#dot2").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "none";
        document.querySelectorAll(".mySlides")[1].style.display = "block";
        document.querySelectorAll(".mySlides")[2].style.display = "none";
        dotcolor();
    })
    document.querySelector("#dot3").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "none";
        document.querySelectorAll(".mySlides")[1].style.display = "none";
        document.querySelectorAll(".mySlides")[2].style.display = "block";
        dotcolor();
    })
} catch (e) {
    console.log("Error in Dot Interaction below Carousal")
}