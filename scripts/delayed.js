
// add delayed functionality here
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