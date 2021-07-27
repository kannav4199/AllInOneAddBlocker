setInterval(function () {
    var skipButton = document.getElementsByClassName('ytp-ad-skip-button');
    if (skipButton != undefined && skipButton.length > 0) {
        console.log('Video Add detected');
        skipButton[0].click();
    }

    var closeBannerAdd = document.getElementsByClassName('ytp-ad-overlay-close-button');
    if (closeBannerAdd != undefined && closeBannerAdd.length > 0) {
        console.log('Banner Add detected');
        closeBannerAdd[0].click();
    }

}, 1000)