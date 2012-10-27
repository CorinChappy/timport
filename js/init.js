window.addEventListener('load', function() {
    console.log("shit loaded... now initializing");
    e.width = timjs.calcWidth();
    e.height = timjs.calcHeight();
    e.init('game', mainMenu, ['bg.png']);
});