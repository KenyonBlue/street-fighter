$(document).ready(function () {
    $('.ryu').mouseenter(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '1020px'
            },
            500,
            function () {
                $(this).hide();
                $(this).css('left', '480px');
            }
        );
    });
    $('.ryu').mouseup(function () {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(document).keydown(function (e) {
        if (e.keyCode == 88) {
            playCool();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-ready').show();
            $('.ryu-cool').hide();
            /*console.log('wanting this to work test up!')*/
        }


    });

});
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();

    }
}
var coolSound = false;

function playCool() {
    //if the sounds was playing before make sure it is stopped before starting a new one
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
        $('#cool')[0].volume = 0.5;
    }
}
