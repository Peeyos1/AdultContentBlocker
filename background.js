chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://*.xxx/*"]
    },
    ["blocking"]
);
