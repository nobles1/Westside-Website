

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":654},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-memories-2021","displayName":"Memories 2021","link":{"linkType":"LinkTypePage","href":"#!page-memories-2021"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-pastor-and-ministers","displayName":"Pastor And Ministers","link":{"linkType":"LinkTypePage","href":"#!page-pastor-and-ministers"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-music-page","displayName":"Music Page","link":{"linkType":"LinkTypePage","href":"#!page-music-page"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-church-service","displayName":"Church Service","link":{"linkType":"LinkTypePage","href":"#!page-church-service"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-history","displayName":"History","link":{"linkType":"LinkTypePage","href":"#!page-history"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-contact","displayName":"Contact","link":{"linkType":"LinkTypePage","href":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})