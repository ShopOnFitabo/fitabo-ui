(function($) {
    "use strict";

    if ($(window).width() > 767) {
        if($('.theiaStickySidebar').length > 0) {
            $('.theiaStickySidebar').theiaStickySidebar({
                // Settings
                additionalMarginTop: 30
            });
        }
    }

})(jQuery);