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

