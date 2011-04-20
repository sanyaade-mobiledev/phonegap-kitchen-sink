(function() {

    window.navigator = {
        accelerometer: {
            clearWatch: function(watchId) {
                clearTimeout(watchId);
            },
            watchAcceleration: function(onSuccess, onFail, options) {
                var watchId = setInterval(function() {
                    onSuccess({
                        x: Math.random(),
                        y: Math.random(),
                        z: Math.random()
                    });
                }, options.frequency);

                return watchId;
            }
        },

        camera: {
            getPicture: function(onSuccess, onFail, options) {
                onSuccess('hello/world/image.png');
            },
            PictureSourceType: {
                PHOTOLIBRARY: 0
            },
            DestinationType: {
                FILE_URI: 0
            }
        }
    };

})();
