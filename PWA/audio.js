var player = document.querySelector('#audioPlayer');

function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    var bouton =  document.getElementById('modelec');
    console.log(bouton)


    if (player.paused) {
        player.load();
        player.play();
        bouton.innerHTML = '<i class="fa fa-pause" id="icon"></i>';
        console.log('lecture')
        console.log(bouton)

    } else {
        player.pause();	
        bouton.innerHTML = '<i class="fa fa-play" id="icon"></i>';
        console.log('pause')
        console.log(bouton)

    }

    
}

