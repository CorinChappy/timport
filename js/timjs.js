// timjs game logic goes here
var timjs = {

    // set bindings to false if they are not required
    // 
    // all the callbacks specified here will be called as the first action
    // at the beggining of each game tick in the order they were fired
    bindings: {
        keydown: new Array(50),
        keyup: new Array(50)
    },

    // initializer. maybe loading assets?
    init: function() {

        // V8 performance friendly way to set the bindings in a array, not dictionary
        // Also, the simpliest way to set the keys to be the keyCode without hardcoding
        timjs.bindings.keydown[0] = null;
        timjs.bindings.keyup[0] = null;

        // log a message so we know it works :)
        console.log("timjs scenario got initialized.. how cool this can be?");
    },

    // runned each tick after input callbacks are done
    update: function() {
       // console.log("some update");
    },

    // runned each tick after update is done
    draw: function(ctx) {
        // put the background in place
        ctx.drawImage(a('background.jpg'), 0, 0, e.width, e.height);
        // console.log("this may draw");
    },

    // definition of the input callbacks used in bindings:
    speedUp: function() {
        console.log("now the speed of the curren brick should be bigger");
    },

    endSpeedUp: function() {
        console.log("return to normal falling speed when key is released");
    },

    moveRight: function() {
        console.log("move the brick right if there is enough room");
    },

    moveLeft: function() {
        console.log("move the brick left if there is enough room");
    },

    // game logic comes here:

    currentBrick: null,
    score: 0,
    columns: 5,
    rows: 10,

    calcWidth: function() {
        return (timjs.columns * 66) + 4; // 2 px left alone on right, 2px left alone on right - looks cooler
    },
    
    calcHeight: function() {
        return (timjs.rows * 40) + 40;  // we left 40 pixels to render score and other interesting stuff
    }
}