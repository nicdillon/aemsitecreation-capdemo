
// add delayed functionality here
import('./carouselCode.js')
import('./digitalData.js')

if(document.title == "Home | Healthy Horizons"){
    document.querySelector("div.columns-wrapper").innerHTML='<div class="columns block columns-3-cols flexmainblock" data-block-name="columns" data-block-status="loaded">\n  <h1 class="topicContent">What We Offer</h1>\n  \x3C!-- Flex Block -->\n  <div class="mainflexbox">\n    <div class="flexbox">\n      <p class="typo flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_18338cf16d671c10be7d8c628dfaf4d2073395be5.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <div class="innerFlex">\n        <p class="flexContent">Recommend our comprehensive workout plans and exercise routines to help your patients get moving.</p>\n        <p class="changesText"><a href="/fitness" title="FITNESS" class="button flexButton">FITNESS</a></p>\n      </div>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_14f8618e7cb1c3a4d12b60d2b85003302787e1a63.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Provide your patients with access to nutritious recipes that make healthy eating easy and enjoyable.</p>\n      <p class="changesText1"><a href="/nutrition" title="NUTRITION" class="button flexButton">NUTRITION</a></p>\n    </div>\n    <div class="flexbox">\n      <p class="flexboxPtag">\n        <picture>\n          <img loading="lazy" alt="" src="./media_1f9166a70f9a4f39816da8dc1f05fa719279ee046.png?width=750&amp;format=png&amp;optimize=medium" width="400" height="100">\n        </picture>\n      </p>\n      <p class="flexContent">Support your patients mental health with our mindfulness practices and well-being tips.</p>\n      <p class="changesText1"><a href="/mental-well-being" title="MENTAL WELL-BEING" class="button flexButton">MENTAL WELL-BEING</a></p>\n    </div>\n  </div>\n  \x3C!-- End of Flex Block -->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
    document.querySelector(".carousel-wrapper").innerHTML = '\n  \x3C!-- Slideshow container -->\n <br> <div class="slideshow-container">\n\n    \x3C!-- Full-width images with number and caption text -->\n    <div class="mySlides fade" style="display: block;">\n      <img src="./media_13e6b3a029b9929bd4ce385fc9e61b451246f29de.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Stronger, Healthier, Happier</p>\n      <p>But at the same time they happened with great labor and pain.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_10008f1d391343e2885cbc08123e17de76dc8085b.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Eat to Succeed</p>\n      <p>For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.</p>\n    </div>\n\n    <div class="mySlides fade" style="display: none;">\n      <img src="./media_174c34920bb8ee8311f591d8c70e5b232b8e9a0ca.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" style="width:100%">\n      <p class="text additionalText">Clear Mind, Full Heart</p>\n      <p>Do not be angry with the pain in the rebuke, in the pleasure he wants to be a hair from the pain, let him run away from the pain.</p>\n    </div>\n\n    \x3C!-- Next and previous buttons -->\n    <a class="prev">❮</a>\n    <a class="next">❯</a>\n  </div>\n  <br>\n\n  \x3C!-- The dots/circles -->\n  <div style="text-align:center">\n    <span class="dot" id="dot1"></span>\n    <span class="dot" id="dot2"></span>\n    <span class="dot" id="dot3"></span>\n  </div>\n\n\n \n'
}

try {
    document.querySelector(".cookie-consent-deny").addEventListener("click", function () {
        document.querySelector("#simple-cookie-consent").style.display = "none"
    })
    document.querySelector(".cookie-consent-allow").addEventListener("click", function () {
        document.querySelector("#simple-cookie-consent").style.display = "none"
    })
}
catch (e) {
    console.log("No Cookie Consent Box Available!");
}

try {
    if (document.title == 'Home | Healthy Horizons') {
        document.querySelector("#nav > div.section.nav-sections > div > ul > li:nth-child(1) > a").style.fontWeight = "bold"
    }
    else if (window.location.pathname == '/fitness') {
        document.querySelector("#nav > div.section.nav-sections > div > ul > li:nth-child(2) > a").style.fontWeight = "bold"
    }
}
catch {
    // do nothing
}