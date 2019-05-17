var player = document.querySelector('#audioPlayer');


function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    
    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();	
        control.textContent = 'Play';
    }
}

// -webkit-transform: rotate(2520deg);
// -moz-transform: rotate(2520deg);
// transform: rotate(2520deg);
// -webkit-transition: all 33s ease;
// -moz-transition: all 33s ease;
// -o-transition: all 33s ease;
// transition: all 33s ease;

// var debut = new Date();
 
// // le script ici
// var i=0
// while(i < 1234567)
//      i++;
// // fin du script
 
// var fin = new Date();
// tempsMs = fin.getTime() - debut.getTime();
// alert("Le script a mis " + tempsMs/1000 + " secondes.");