document.querySelector("div.columns-wrapper").innerHTML='<div class="columns block columns-3-cols flexmainblock" data-block-name="columns" data-block-status="loaded">\n  <h1 class="topicContent">What We Offer</h1>\n  \x3C!-- Flex Block -->\n  <div class="mainflexbox">\n    <div class="flexbox">\n      <p class="typo flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_18338cf16d671c10be7d8c628dfaf4d2073395be5.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <div class="innerFlex">\n        <p class="flexContent">Recommend our comprehensive workout plans and exercise routines to help your patients get moving.</p>\n        <p class="changesText"><a href="/fitness" title="FITNESS" class="button flexButton">FITNESS</a></p>\n      </div>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_14f8618e7cb1c3a4d12b60d2b85003302787e1a63.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Provide your patients with access to nutritious recipes that make healthy eating easy and enjoyable.</p>\n      <p class="changesText1"><a href="/nutrition" title="NUTRITION" class="button flexButton">NUTRITION</a></p>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_1f9166a70f9a4f39816da8dc1f05fa719279ee046.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Support your patients mental health with our mindfulness practices and well-being tips.</p>\n      <p class="changesText1"><a href="/mental-well-being" title="MENTAL WELL-BEING" class="button flexButton">MENTAL WELL-BEING</a></p>\n    </div>\n  </div>\n  \x3C!-- End of Flex Block -->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

document.querySelector(".carousel-wrapper").innerHTML = '\n  \x3C!-- Slideshow container -->\n  <div class="slideshow-container">\n\n    \x3C!-- Full-width images with number and caption text -->\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_13e6b3a029b9929bd4ce385fc9e61b451246f29de.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <h1 class="text">Stronger, Healthier, Happier</h1>\n      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: block;">\n      <img src="./media_10008f1d391343e2885cbc08123e17de76dc8085b.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <h1 class="text">Eat to Succeed</h1>\n      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_174c34920bb8ee8311f591d8c70e5b232b8e9a0ca.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <h1 class="text">Clear Mind, Full Heart</h1>\n      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n    </div>\n\n    \x3C!-- Next and previous buttons -->\n    <a class="prev">❮</a>\n    <a class="next">❯</a>\n  </div>\n  <br>\n\n  \x3C!-- The dots/circles -->\n  <div style="text-align:center">\n    <span class="dot" id="dot1"></span>\n    <span class="dot" id="dot2"></span>\n    <span class="dot" id="dot3"></span>\n  </div>\n\n\n  <style>\n    * {\n      box-sizing: border-box\n    }\n\n    /* Slideshow container */\n    .slideshow-container {\n      max-width: 1000px;\n      position: relative;\n      margin: auto;\n    }\n\n    /* Hide the images by default */\n    .mySlides {\n      display: none;\n    }\n\n    /* Next & previous buttons */\n    .prev,\n    .next {\n      cursor: pointer;\n      position: absolute;\n      top: 50%;\n      width: auto;\n      margin-top: -22px;\n      padding: 16px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.8);\n      font-weight: bold;\n      font-size: 18px;\n      transition: 0.6s ease;\n      border-radius: 0 3px 3px 0;\n      user-select: none;\n    }\n\n    /* Position the "next button" to the right */\n    .next {\n      right: 0;\n      border-radius: 3px 0 0 3px;\n    }\n\n    /* On hover, add a black background color with a little bit see-through */\n    .prev:hover,\n    .next:hover {\n      background-color: rgba(255, 255, 255, 0.8);\n      color: black;\n    text-decoration: none;\n}\n\n    /* Caption text */\n    .text {\n      color: #f2f2f2;\n      font-size: 15px;\n      padding: 8px 12px;\n      position: absolute;\n      bottom: 8px;\n      width: 100%;\n      text-align: center;\n    }\n\n    /* Number text (1/3 etc) */\n    .numbertext {\n      color: #f2f2f2;\n      font-size: 12px;\n      padding: 8px 12px;\n      position: absolute;\n      top: 0;\n    }\n\n    /* The dots/bullets/indicators */\n    .dot {\n      cursor: pointer;\n      height: 15px;\n      width: 15px;\n      margin: 0 2px;\n      background-color: #bbb;\n      border-radius: 50%;\n      display: inline-block;\n      transition: background-color 0.6s ease;\n    }\n\n    .active,\n    .dot:hover {\n      background-color: #717171;\n    }\n\n    /* Fading animation */\n    .fade {\n      animation-name: fade;\n      animation-duration: 1.5s;\n    }\n\n    @keyframes fade {\n      from {\n        opacity: .4\n      }\n\n      to {\n        opacity: 1\n      }\n    }\n  </style>\n'

try {
    document.querySelector("#dot1").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "block";
        document.querySelectorAll(".mySlides")[1].style.display = "none";
        document.querySelectorAll(".mySlides")[2].style.display = "none";
    })
    document.querySelector("#dot2").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "none";
        document.querySelectorAll(".mySlides")[1].style.display = "block";
        document.querySelectorAll(".mySlides")[2].style.display = "none";
    })
    document.querySelector("#dot3").addEventListener("click", function () {
        document.querySelectorAll(".mySlides")[0].style.display = "none";
        document.querySelectorAll(".mySlides")[1].style.display = "none";
        document.querySelectorAll(".mySlides")[2].style.display = "block";
    })
} catch (e) {
    console.log("Error in Dot Interaction below Carousal")
}

if(document.title == 'Home | Healthy Horizons'){
    document.querySelector("#nav > div.section.nav-sections > div > ul > li:nth-child(1) > a").style.fontWeight="bold"
}

document.querySelector(".cookie-consent-deny").addEventListener("click", function () {
    document.querySelector("#simple-cookie-consent").style.display = "none"
})
document.querySelector(".cookie-consent-allow").addEventListener("click", function () {
    document.querySelector("#simple-cookie-consent").style.display = "none"
})
