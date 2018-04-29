(function() {

    var homepageText = $(".home-text");
    var quoteIndex = -1;
    
    function flipText() {
        ++quoteIndex;
        homepageText.eq(quoteIndex % homepageText.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, flipText);
    }
    
    flipText();
    
})();
