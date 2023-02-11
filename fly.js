
    
        var x = window.open("", "target", "width=150,height=150,top=");
        x.moveTo(window.screenX, window.screenY);
        var moveforword = true;
        x.focus();

        var y = window.setInterval(() => {
            availableHeight = window.innerHeight - x.screenY;
            if (availableHeight > 50 && moveforword === true)
                x.moveBy(50, 50);
            else if (availableHeight > 50 && moveforword === false) {
                x.moveBy(-50, -50);
                if (window.screenY === x.screenY) {
                    moveforword = true;
                }
            } else if (availableHeight < 50) {
                moveforword = false;
                x.moveBy(-50, -50);
            }


        }, 500);

        function stop() {
            clearInterval(y);
            x.focus();
        }
<button type="submit" onclick="stop()"> Stop </button>
