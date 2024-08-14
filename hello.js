(function() {
    // Check if the current document is the top-most document in the window hierarchy
    if (window.top !== window.self) {
        // The page is loaded inside an iframe or another window
        alert('Hello!');
    } else {
        // Check the referrer to see where the request came from
        const referrer = document.referrer;

        if (referrer && !referrer.includes(window.location.hostname)) {
            // The code is loaded from a different domain
            alert('Hello!');
        }
    }
})();
