function load_images(){

}
function init(){
    canvas=document.getElementById("mycanvas");
    W=700;
    H=400;
    canvas.height=H;
    canvas.width=W;

    pen=canvas.getContext('2d');

    box ={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:10
    };
}

function draw(){
    
    //clear previous box
    pen.clearRect(0,0,W,H);
    //create new box
    pen.fillStyle="red";
    pen.fillRect(box.x,box.y,box.w,box.h);
}

function update(){
    //movement
    box.y+=box.speed;
    if(box.y>H-box.h|| box.y<0){
        box.speed*=-1;
    }
}

function gameloop(){
    draw();
    update();
    console.log("gameloop");
}

load_images();
init();
var f =setInterval(gameloop,100);