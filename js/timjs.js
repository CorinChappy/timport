// timjs game logic goes here
var timjs = {

    // set bindings to false if they are not required
    // 
    // all the callbacks specified here will be called as the first action
    // at the beggining of each game tick in the order they were fired
    rows: 10,
    columns: 20,

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
        e.clearScreen();
        // put the background in place
        ctx.drawImage(a('bg.png'), 0, 0, e.width, e.height);
        // console.log("this may draw");
    },

    calcWidth: function() {
        return (timjs.columns * 40);
    },
    
    calcHeight: function() {
        return (timjs.rows * 40);
    }
}