$(window).on("scroll", function() {
    $('.section--participation').toggleClass("replace-color", $(this).scrollTop() > $(window).height());
});


// $(window).scroll(function(){
//     if ($(this).scrollTop() > 1100) {
//         $('.section--participation').addClass('replace-color');
//     } else {
//         $('.section--participation').removeClass('replace-color');
//     }
// });


// Add class to Footer when scroll
var postion = $('#main').offset().top,
    height = $('#main').height();

$(document).on('scroll', function (){
    var scroll = $(document).scrollTop();
    if(scroll  > postion && scroll < (postion + height) ) {
        $('footer').addClass('footer--view')
        console.log('Test view')
    }else {
        $('footer').removeClass('footer--view')
    }
})