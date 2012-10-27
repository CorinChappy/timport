// timjs game logic goes here
var mainMenu = {


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
        mainMenu.bindings.keydown[0] = null;
        mainMenu.bindings.keydown[keys.leftArrow] = mainMenu.startGame;
        mainMenu.bindings.keydown[keys.downArrow] = mainMenu.startGame;
        mainMenu.bindings.keydown[keys.upArrow] = mainMenu.startGame;
        mainMenu.bindings.keydown[keys.rightArrow] = mainMenu.startGame;

        // log a message so we know it works :)
        console.log("main menu scenario up and running.");
    },

    startGame: function() {
        e.changeScenario(timjs);
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
        // put the logo

        ctx.fillStyle = '#333333';
        ctx.font = '22pt Arial';
        var text = "press any arrow to start";
        ctx.fillText(text, h.centerCoord(ctx.measureText(text).width, e.width), 210);
    },
}