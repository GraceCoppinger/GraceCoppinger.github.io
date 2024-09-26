var removeBranding = function() {
    try {
        var element = document.querySelector("iframe[title*=chat]:nth-child(2)").contentDocument.querySelector(`a[class*=tawk-branding]`)

        if (element) {
            element.remove()
        }
    } catch (e) {}
}

var tick = 100

setInterval(removeBranding, tick)
