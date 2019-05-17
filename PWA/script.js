
if ('serviceWorker' in navigator) {
    // Puis on déclare celui-ci
    // via la fonction `register`
    navigator.serviceWorker.register('service-worker.js')
.then(function(reg) {
        // On a réussi ! 
        console.log("App: Achievement unlocked.");
      })
      .catch(function(error) {
        // Il y a eu un problème
        console.log("App: Crash de Service Worker",error);
      });
  } else {
    // Si le navigateur ne permet pas
    // d'utiliser un Service Worker
    // on ne fait rien de particulier.
    // Le site devrait continuer à
    // fonctionner normalement.
  };
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
// .register('/sw-test/sw.js', { scope: '/sw-test/' })
// .then(function(reg) {
//       // registration worked
//       console.log('Registration succeeded. Scope is ' + reg.scope);
//     }).catch(function(error) {
//       // registration failed
//       console.log('Registration failed with ' + error);
//     });
//   };