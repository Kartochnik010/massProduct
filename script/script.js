
const cake = new Audio('sounds/Melanie Martinez – Cake.mp3')
const because = new Audio('sounds/Pharrell Williams - Happy.mp3')
const dontworry = new Audio('sounds/dont worry.mp3')
const buySound = new Audio('sounds/mixkit-festive-melody-audio-2985.wav')
const songs = [cake, because, dontworry];

$('#assortiment').slideToggle();
$('.mayble').slideToggle();

$('#arrowDownAssortiment').click(function () { 
    $('#assortiment').slideToggle();
    $('#arrowDownAssortiment').toggleClass('upsideDown');
});

$('#arrowDownPricelist').click(function () { 
    $('.mayble').slideToggle();
    $('#arrowDownPricelist').toggleClass('upsideDown');
});

let starter = 1;
$('body').mouseover(function () {
    if (starter == 1) {
        dontworry.play();
        if (dontworry.paused == false) {
            starter = 0;
        }
    }
});

$(document).keypress(function (e) { 
    if (e.key == 'b') {
        if (dontworry.paused == true) {
            dontworry.play();
        } else {
            dontworry.pause();
        }
    }
});


$('#goAheadButton').click(function () { 
    buySound.play();
    $('#arrowDownAssortiment').click();
});

$('.pinky').click(function () { 
    buySound.play();
});

$('#song1').click(function () { 
    if (songs[0].paused == true) {
        songs[0].play();
        $('#song1 img').attr('src', 'font-awesome-svg/volume-high.svg');
        songs[1].pause();
        $('#song2 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
        songs[2].pause();
        $('#song3 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    } else {
        songs[0].pause();
        $('#song1 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    }
});

$('#song2').click(function () { 
    if (songs[1].paused == true) {
        songs[1].play();
        $('#song2 img').attr('src', 'font-awesome-svg/volume-high.svg');
        songs[0].pause();
        $('#song1 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
        songs[2].pause();
        $('#song3 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    } else {
        songs[1].pause();
        $('#song2 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    }
});

$('#song3').click(function () { 
    if (songs[2].paused == true) {
        songs[2].play();
        $('#song3 img').attr('src', 'font-awesome-svg/volume-high.svg');
        songs[0].pause();
        $('#song1 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
        songs[1].pause();
        $('#song2 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    } else {
        songs[2].pause();
        $('#song3 img').attr('src', 'font-awesome-svg/volume-xmark.svg');
    }
});


