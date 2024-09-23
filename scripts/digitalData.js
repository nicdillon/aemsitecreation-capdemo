function sendClickEvent() {
    try {
        typeof window.digitalData == "undefined" ? window.digitalData = {} : console.log("DigitalData Available");
        var clickButtonName = localStorage.getItem("buttonName");
        var clickButtonHref = localStorage.getItem("buttonHref");
        if (clickButtonName != null) {
            window.digitalData.clickEvent = {
                "buttonName": clickButtonName,
                "buttonHref": clickButtonHref
            }
            _satellite.track("clickEvent", digitalData);
            localStorage.removeItem("buttonName");
            localStorage.removeItem("buttonHref");
        }
    } catch { console.log("Error in Firing Link Click Direct Call"); }
}

function sendPageView() {
    try {
        window.digitalData.page = {
            "pageInfo": {
                "pageShortName": document.title.split("|")[document.title.split("|").length - 1],
                "pageName": window.document.title,
                "destinationURL": window.location.href,
                "title": window.document.title,
                "server": window.location.origin
            }
        };
        window.digitalData.page.pageInfo.referringURL = document.referrer;
        window.digitalData.page.pageInfo.sysEnv = navigator.userAgent;
        _satellite.track("pageview", digitalData);
    } catch (e) { console.log("Error in Page View Direct Call") }
}

function attachLinkCallbacks() {
    try {
        var buttons = document.querySelectorAll("a");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                localStorage.setItem("buttonName", buttons[i].title);
                localStorage.setItem("buttonHref", buttons[i].href);
                window.digitalData.clickEvent = {
                    "buttonName": clickButtonName,
                    "buttonHref": clickButtonHref
                }
                _satellite.track("clickEvent", digitalData);
            });
        }
    }
    catch (e) { console.log("Error in Setting up Local Storage for link Click"); }
}

sendPageView()
sendClickEvent()
attachLinkCallbacks()
