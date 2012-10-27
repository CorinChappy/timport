/* Assets work is done here.

    All the assets are loaded when the engine is initialized.
    The callback is called with one argment, the progress (%).
 */

var assetEngine = {
    cache: {},
    count: 0,
    loaded: 0,

    updateCallback: function(progress) {
        console.log("Loaded " + progress + "%.");
    },

    doneCallback: function() {
        console.log("Assets loaded successfully.");
    },

    init: function(assets, onDone, onUpdate) {
        var i;

        if (onDone) {
            assetEngine.doneCallback = onDone;
        }

        if (onUpdate) {
            assetEngine.updateCallback = onUpdate;
        }

        assetEngine.updateCallback(0);
        assetEngine.count = assets.length;
        for (i = 0; i < assetEngine.count; i++) {
            assetEngine.fetch(assets[i]);
        }
    },

    // assets are loading too fast to test the loading screen, using this to simulate
    // clear the setTimeout and i variable after the loading screen does a good job
    // i: 1, 
    update: function(asset, image) {
        // setTimeout(function() {
            assetEngine.cache[asset] = image;
            assetEngine.loaded++;

            assetEngine.updateCallback(h.percent(assetEngine.loaded, assetEngine.count), asset);
            if (assetEngine.loaded === assetEngine.count) {
                assetEngine.doneCallback();
            }
        // }, 1000 * assetEngine.i++);
    },

    fetch: function(asset) {
        // todo: detect asset type and act acordingly
        var image = new Image();
        image.src = 'assets/' + asset;

        image.onload = function() {
            assetEngine.update(asset, this);
        };

        image.onerror = function() {
            // todo: nice way to tell the user to try again
            throw "Asset " + this.src + " loading failed."
        };
    },

    isLoaded: function(asset) {
        return assetEngine.cache[asset] ? true : false;
    },

    get: function(asset) {
        var a = assetEngine.cache[asset];
        if (!a) throw "Asset not defined in init.js.";
        return a;
    }
}

// shortcut to get an asset:
var a = assetEngine.get;