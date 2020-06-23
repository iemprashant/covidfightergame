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
    game_over=false;

    e1={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:20
    };
    e2={
        x:350,
        y:150,
        w:60,
        h:60,
        speed:30
    }
    e3={
        x:550,
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
        moving:false,
        health:100,
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

function iscollision(rect1,rect2){
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
         // collision detected!
         return true;
     }
     return false;
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
    pen.fillStyle="white";
    pen.fillText("Score"+player.health,10,10)
}

function update(){
    //player movement
    if(player.moving==true){
        player.x += player.speed;
        player.health+=20;
    }
    //collision btwn player and gem
    if(iscollision(player,gem)==true){
        alert("you Win");
        game_over=true;
        return;
    }
    for(let i=0; i<enemy.length;i++){    
        if(iscollision(enemy[i],player)==true){
            player.health-=50;
            if(player.health<0){
                game_over=true;
                alert("Game Over" + player.health)
            }
            return;
        }
    }
    // enemy movement
    for(let i=0; i<enemy.length;i++){    
        enemy[i].y +=  enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h|| enemy[i].y<0){
            enemy[i].speed*=-1;
        }
    }
}

function gameloop(){
    if(game_over==true){
        clearInterval(f); 
    }
    draw();
    update();
    console.log("gameloop");
}

load_images();
init();
var f =setInterval(gameloop,100);