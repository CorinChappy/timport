window.addEventListener('load', function() {
    console.log("shit loaded... now initializing");
    e.width = timjs.calcWidth();
    console.log(e.width);
    e.height = timjs.calcHeight();
    console.log(e.height);
    e.init('game', timjs, ['bg.png']);
});