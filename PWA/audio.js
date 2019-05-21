var player = document.querySelector('#audioPlayer');



function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);

    if (player.paused) {
        player.load();
        player.play();
        control.textContent = 'Pause';
        console.log('lecture')
    } else {
        player.pause();	
        control.textContent = 'Play';
        console.log('pause')

    }

    
}

