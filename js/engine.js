var keys = {
    leftArrow: 37,
    rightArrow: 39,
    downArrow: 40,
    upArrow: 38
};

var e = {
    canvasId: undefined,
    canvas: undefined,
    ctx: undefined,
    width: 250,
    height: 250,
    scenario: false,
    inputBuffer: false,
    looping: false,

    init: function(canvasId, scenario, assets) {
        e.canvasId = canvasId;
        e.canvas = document.getElementById(canvasId);
        if (!e.canvas) {
            throw "Canvas ID invalid.";
        }
        e.canvas.width = e.width;
        e.canvas.height = e.height;
        e.ctx = e.canvas.getContext('2d');

        assetEngine.init(assets, function() {
            e.changeScenario(scenario);
        }, e.drawLoadingScreen);
    },

    changeScenario: function(scenario) {
        if (!scenario || !scenario.draw || !scenario.update) {
            e.looping = false;
            throw "Invalid scenario given.";
        }
        scenario.init();
        e.scenario = scenario;
        e.looping = true;
        if (e.scenario.bindings) {
            e.startInputListener();
        }
        e.loop();
    },

    stopLoop: function() {
        e.looping = false;
    },

    // main loop using RequestAnimationFrame
    loop: function() {
        if (e.looping) {
            window.requestAnimationFrame(e.loop, e.canvas);
            if (e.inputBuffer !== false) {
                e.inputCallbacks();
            }
            e.scenario.update();
            e.scenario.draw(e.ctx);
        }
    },

    // call all the input callbacks required by the scene
    inputCallbacks: function() {
        for (var i in e.inputBuffer) {
            e.inputBuffer[i]();
        }
        e.inputBuffer = new Array();
    },

    // listen to inputs required by  the scene, buffet them and prevent their default actions
    inputListener: function(event) {
        var binding, bind; // make sure these two are local variables... GB-friendly shit
        if (bindings = e.scenario.bindings[event.type]) {
            if (bind = bindings[event.keyCode]) {
                e.inputBuffer.push(bind);
                event.preventDefault();
            }
        }
    },

    // starts the input listener if required by the scene
    startInputListener: function() {
        e.inputBuffer = new Array();
        window.addEventListener('keydown', e.inputListener);
        window.addEventListener('keyup', e.inputListener);
        console.log("input listener started");
    },

    clearScreen: function() {
        e.ctx.clearRect(0, 0, e.width, e.height);
    },

    // drawLoadingScreen that works on whatever game:
    drawLoadingScreen: function(percent) {
        e.clearScreen();
        // get a 70% width 10px line on the center of the canvas
        var width = h.fromPercent(70, e.width);

        var height = 10; // pixels
        var startX = h.centerCoord(width, e.width);
        var startY = h.centerCoord(height, e.height);

        // put it on canvas
        e.ctx.fillStyle = '#CCCCCC';
        e.ctx.fillRect(startX, startY, width, height);

        // make the progress bar on top of that line
        e.ctx.fillStyle = '#333333';
        e.ctx.fillRect(startX + 2, startY + 2, h.fromPercent(percent, width - 4), height - 4);

        // write the progress % on canvas
        e.ctx.fillStyle = '#333333';
        e.ctx.font = '9pt Arial';
        var text = percent + "%";
        e.ctx.fillText(text, h.centerCoord(e.ctx.measureText(text).width, e.width), (startY - height));
    }
}


// helper functions
h = {
    // how much p% is x of max
    percent: function(x, max) {
        return (100 * x) / max;
    },

    fromPercent: function(p, max) {
        return (p / 100) * max;
    },

    // get a random int from [min,max]
    random: function(min, max) {

    },

    centerCoord: function(objSize, parentSize) {
        return (parentSize - objSize) / 2;
    }
}