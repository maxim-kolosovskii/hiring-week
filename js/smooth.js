// const q = selector => document.querySelector(selector),
//     on = 'addEventListener'

// Button behavior
// function getFocus() {
    // startJob.classList.add("playing");
    // console.log(startJob);
    // fillJobForm.scrollIntoView({ behavior: 'smooth', block: 'start'});
// }

// q('#startJob')[on]('click', getFocus)

// Add focus on first input
focusMethod = function getFocus() {
    document.getElementById("form-fio").focus();
    fillJobForm.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

// focusScrollMethod = function getFocus() {
//     document.getElementById("form-fio").focus({preventScroll:false});
//     document.getElementById("form-fio").focus();
// }

// $(function() {
    // Stick the #fillJobForm to the top of the window
    // var nav = $('#fillJobForm');
    // var navHomeY = nav.offset().top;
    // var isFixed = false;
    // var $w = $(window);
    // $w.scroll(function() {
    //     var scrollTop = $w.scrollTop();
    //     var shouldBeFixed = scrollTop > navHomeY;
        // if (shouldBeFixed && !isFixed) {
        //     nav.css({
        //         position: 'fixed',
        //         top: 0,
        //         left: nav.offset().left,
        //         width: nav.width()
        //     });
        //     isFixed = true;
        // } else if (!shouldBeFixed && isFixed) {
        //     nav.css({
        //         position: 'static'
        //     });
        //     isFixed = false;
        // }
//     });
// });