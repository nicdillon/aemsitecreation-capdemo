if (document.title == "Home | Healthy Horizons") {
    document.querySelector("div.columns-wrapper").innerHTML = '<div class="columns block columns-3-cols flexmainblock" data-block-name="columns" data-block-status="loaded">\n  <h1 class="topicContent">What We Offer</h1>\n  \x3C!-- Flex Block -->\n  <div class="mainflexbox">\n    <div class="flexbox">\n      <p class="typo flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_18338cf16d671c10be7d8c628dfaf4d2073395be5.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <div class="innerFlex">\n        <p class="flexContent">Recommend our comprehensive workout plans and exercise routines to help your patients get moving.</p>\n        <p class="changesText"><a href="/fitness" title="FITNESS" class="button flexButton">FITNESS</a></p>\n      </div>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_14f8618e7cb1c3a4d12b60d2b85003302787e1a63.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Provide your patients with access to nutritious recipes that make healthy eating easy and enjoyable.</p>\n      <p class="changesText1"><a href="/nutrition" title="NUTRITION" class="button flexButton">NUTRITION</a></p>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_1f9166a70f9a4f39816da8dc1f05fa719279ee046.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Support your patients mental health with our mindfulness practices and well-being tips.</p>\n      <p class="changesText1"><a href="/mental-well-being" title="MENTAL WELL-BEING" class="button flexButton">MENTAL WELL-BEING</a></p>\n    </div>\n  </div>\n  \x3C!-- End of Flex Block -->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    document.querySelector(".carousel-wrapper").innerHTML = '\n  \x3C!-- Slideshow container -->\n <br> <div class="slideshow-container">\n\n    \x3C!-- Full-width images with number and caption text -->\n    <div class="mySlides fade" style="display: block;">\n      <img src="./media_13e6b3a029b9929bd4ce385fc9e61b451246f29de.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Stronger, Healthier, Happier</p>\n      <p>Patients who follow our workout plans report feeling stronger, healthier, and happier.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_10008f1d391343e2885cbc08123e17de76dc8085b.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Eat to Succeed</p>\n      <p>Our recipes and nutrition principles help patients prioritize healthy eating habits and improve their health one bite at a time.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_174c34920bb8ee8311f591d8c70e5b232b8e9a0ca.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Clear Mind, Full Heart</p>\n      <p>Whether they choose to practice mindfulness alone or with others, our mental well-being exercises help patients improve their mental wellness.</p>\n    </div>\n\n    \x3C!-- Next and previous buttons -->\n    <a class="prev">❮</a>\n    <a class="next">❯</a>\n  </div>\n  <br>\n\n  \x3C!-- The dots/circles -->\n  <div style="text-align:center">\n    <span class="dot" id="dot1"></span>\n    <span class="dot" id="dot2"></span>\n    <span class="dot" id="dot3"></span>\n  </div>\n\n\n \n'
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
