window.onload = function() {



    var canvas = document.getElementById('sky');
    var ctx = canvas.getContext("2d");


    var w = window.innerWidth;
    var h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    //SNOW FLAKES CREATION

    var mf = 100; //max number of snow flakes 
    var flakes = [];

    for (var i = 0; i < mf; i++) {

        flakes.push({

            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 5 + 2,
            d: Math.random() + 1

        })



    }


    //Draw Flakes

    function drawFlakes() {

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for (var i = 0; i < mf; i++) {

            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true)

        }
        ctx.fill();

        moveFlakes();


    }

    //animation 


    var angle = 0;

    function moveFlakes() {

        for (var i = 0; i < mf; i++) {


            angle += 0.01;

            //storing current flake 
            var f = flakes[i];

            //update x and y coordinate 

            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            //If snowflake reaches bottom
            if (f.y > h) {

                flakes[i] = {
                    x: Math.random() * w,
                    y: 0,
                    r: f.r,
                    d: f.d

                };


            }
        }

    }

    setInterval(drawFlakes, 2500);





}