function setActiveLink() {
    var urlString, urlArray, pageHREF, menu, i, currentURL;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    pageHREF = urlArray[urlArray.length - 1];
    if (pageHREF !== "") {
        menu = document.querySelectorAll('ul#topnav li a');
        for (i = 0; i < menu.length; i++) {
            currentURL = (menu[i].getAttribute('href'));
            HREFArray = currentURL.split('/');
            currentHREF = HREFArray[HREFArray.length - 1];
            menu[i].parentNode.className = '';
            if (currentHREF === pageHREF) {
                menu[i].parentNode.className = 'active';
            }
        }
    }
}