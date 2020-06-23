function load_images(){
    enemy_image=new Image;
    enemy_image.src="Assets/v1.png";

    player_image=new Image;
    player_image.src="Assets/superhero.png";

    gem_image=new Image;
    gem_image.src="Assets/gemm.png";
}
function init(){
    canvas=document.getElementById("mycanvas");
    W=700;
    H=400;
    canvas.height=H;
    canvas.width=W;

    pen=canvas.getContext('2d');

    e1={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:20
    };
    e2={
        x:300,
        y:150,
        w:60,
        h:60,
        speed:30
    };
    e3={
        x:450,
        y:20,
        w:60,
        h:60,
        speed:40
    };
    enemy=[e1,e2,e3];
    player={
        x:20,
        y:H/2,
        w:60,
        h:60,
        speed:20,
        moving:false
    };
    gem={
        x:W-100,
        y:H/2,
        w:60,
        h:60,
    };
    canvas.addEventListener('mousedown',function(e){
        player.moving=true;
    })
    canvas.addEventListener('mouseup',function(e){
        player.moving=false;
    })
}

function draw(){
    
    //clear previous box
    pen.clearRect(0,0,W,H);
    
    //draw player
    pen.drawImage(player_image,player.x,player.y,player.w,player.h);
    
    //draw gem
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);
    //draw the enemy
    for(let i=0; i<enemy.length;i++){    
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    };
    
    
}

function update(){
    if(player.moving==true){
        player.x += player.speed;
    }
    //movement
    for(let i=0; i<enemy.length;i++){    
        enemy[i].y +=  enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h|| enemy[i].y<0){
            enemy[i].speed*=-1;
        }
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