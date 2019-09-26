function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    var bouton = document.getElementById('controlAudioLec');

    if (player.paused) {
        player.play();
        bouton.innerHTML = '<i class="fa fa-pause fa-2x" aria-hidden="true"></i>';
    } else {
        player.pause();
        bouton.innerHTML = '<i class="fa fa-play fa-2x" aria-hidden="true"></i>';
    }
}

function playPodcast(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    var bouton = document.getElementById('controlPodcastLec');
    var titrePodcast = document.getElementById('PodcastPlaying');

// Modifier la source lecture du player pour lire le podcast selectionné.

    // player.innerHTML = '<source scr="'+ + '"></source>'
// envoyer le nom du podcast au lecteur
    // titrePodcast.innerHTML = ...

    if (player.paused) {
        player.play();
        bouton.innerHTML = '<i class="fa fa-pause-circle fa-5x" aria-hidden="true"></i>';
    } else {
        player.pause();
        bouton.innerHTML = '<i class="fa fa-play-circle fa-5x" aria-hidden="true"></i>';
    }
}


function volume(idPlayer, vol) {
    var player = document.querySelector('#' + idPlayer);
    var stick1 = document.querySelector('.stick1');
    var stick2 = document.querySelector('.stick2');
    var stick3 = document.querySelector('.stick3');
    var stick4 = document.querySelector('.stick4');
    var stick5 = document.querySelector('.stick5');

    player.volume = vol;
    switch (vol) {
        case 0:
            stick1.style.background = "rgb(235, 196, 22)";
            stick2.style.background = "#ebebeb";
            stick3.style.background = "#ebebeb";
            stick4.style.background = "#ebebeb";
            stick5.style.background = "#ebebeb";

            break;
        case 0.3:
            stick1.style.background = "rgb(235, 196, 22)";
            stick2.style.background = "rgb(235, 196, 22)";
            stick3.style.background = "#ebebeb";
            stick4.style.background = "#ebebeb";
            stick5.style.background = "#ebebeb";
            break;
        case 0.5:
            stick1.style.background = "rgb(235, 196, 22)";
            stick2.style.background = "rgb(235, 196, 22)";
            stick3.style.background = "rgb(235, 196, 22)";
            stick4.style.background = "#ebebeb";
            stick5.style.background = "#ebebeb";

            break;
        case 0.7:
            stick1.style.background = "rgb(235, 196, 22)";
            stick2.style.background = "rgb(235, 196, 22)";
            stick3.style.background = "rgb(235, 196, 22)";
            stick4.style.background = "rgb(235, 196, 22)";
            stick5.style.background = "#ebebeb";
            break;
        case 1:

            stick1.style.background = "rgb(235, 196, 22)";
            stick2.style.background = "rgb(235, 196, 22)";
            stick3.style.background = "rgb(235, 196, 22)";
            stick4.style.background = "rgb(235, 196, 22)";
            stick5.style.background = "rgb(235, 196, 22)";

            break;
        default:
            break;
    }
}

function update(player) {
    var duration = player.duration; // Durée totale
    var time = player.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');

    progress.style.width = percent + '%';

    document.querySelector('#progressTime').textContent = formatTime(time)+"/"+formatTime(duration);
}

function formatTime(time) {
    var hours = Math.floor(time / 3600);
    var mins = Math.floor((time % 3600) / 60);
    var secs = Math.floor(time % 60);

    if (secs < 10) {
        secs = "0" + secs;
    }

    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }

        return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
        return mins + ":" + secs; // mm:ss
    }
}

function clickProgress(idPlayer, control, event) {
    var parent = getPosition(control); // La position absolue de la progressBar
    var target = getMousePosition(event); // L'endroit du la progressBar où on a cliqué
    var player = document.querySelector('#' + idPlayer);

    var x = target.x - parent.x;
    var y = target.y - parent.y;

    var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;

    var percent = Math.ceil((x / wrapperWidth) * 100);
    var duration = player.duration;

    player.currentTime = (duration * percent) / 100;
}

function getMousePosition(event) {
    return {
        x: event.pageX,
        y: event.pageY
    };
}

function getPosition(element) {
    var top = 0,
        left = 0;

    do {
        top += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);

    return {
        x: left,
        y: top
    };
}