//board
let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardwidth = columnCount * tileSize;
const boardheight = rowCount * tileSize;
let context;

//images
let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

// let pacmanImage;
// let ghostImage;
// let fruitImage;



window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");

    loadImages();
    loadMap();

    // console.log(walls.size);
    // console.log(foods.size);
    // console.log(ghosts.size);

    update();

    document,addEventListener("keyup", movePacman);
}

//X = wall, O = skip, P = pac man, ' ' = food
//Ghosts: b = blue, o = orange, p = pink, r = red

const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X    XPX     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];
// const tileMap = [
//     "XXXXXXXXXXXXXXXXXXX",
//     "X        X        X",
//     "X XX XXX X XXX XX X",
//     "X                 X",
//     "X XX X XXXXX X XX X",
//     "X    X       X    X",
//     "XXXX XXXX XXXX XXXX",
//     "OOOX X       X XOOO",

//     "X        X        X",
//     "X XX XXX X XXX XX X",

//     "XXXXXXXXXXXXXXXXXXX" 
// ];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;


function loadImages(){
    wallImage = new Image();
    wallImage.src = "assets/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "assets/blueGhost.png";

    orangeGhostImage = new Image();
    orangeGhostImage.src = "assets/orangeGhost.png";

    pinkGhostImage = new Image();
    pinkGhostImage.src = "assets/pinkGhost.png";

    redGhostImage = new Image();
    redGhostImage.src = "assets/redGhost.png";

    //pac-man images

    pacmanUpImage = new Image();
    pacmanUpImage.src = "assets/pacmanUp.png";

    pacmanDownImage = new Image();
    pacmanDownImage.src = "assets/pacmanDown.png";

    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "assets/pacmanLeft.png";

    pacmanRightImage = new Image();
    pacmanRightImage.src = "assets/pacmanRight.png";

    
}

function loadMap(){
    walls.clear();
    foods.clear();
    ghosts.clear();

    for (let r = 0; r < rowCount; r++){
        for (let c = 0; c < columnCount; c++){
            const row =tileMap[r];
            const tileMapChar = row[c];

            const x = c * tileSize;
            const y = r * tileSize;

           if (tileMapChar == 'X') { //block wall
                const wall = new Block(wallImage, x, y, tileSize, tileSize);
                walls.add(wall);  
            }
            else if (tileMapChar == 'b') { //blue ghost
                const ghost = new Block(blueGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'o') { //orange ghost
                const ghost = new Block(orangeGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'p') { //pink ghost
                const ghost = new Block(pinkGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'r') { //red ghost
                const ghost = new Block(redGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'P') { //pacman
                pacman = new Block(pacmanRightImage, x, y, tileSize, tileSize);
            }
            else if (tileMapChar == ' ') { //empty is food
                const food = new Block(null, x + 14, y + 14, 4, 4);
                foods.add(food);
            }
        }
    }
}   

function update(){

    draw();
    setTimeout(update, 50);  //20 FPS -> 1000/20 = 50ms
}

function draw(){
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);
    for(let ghost of ghosts.values()){
        context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
    }
    for(let wall of walls.values()){
        context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
    } 
    context.fillStyle = "white";
    for(let food of foods.values()){
        context.fillRect(food.x, food.y, food.width, food.height);
    }
}

function movePacman(e){
    if(e.code == "ArrowUp" || e.code == "KeyW"){
        pacman.updateDirection("U");
    }
    else if(e.code == "ArrowDown" || e.code == "KeyS"){
        pacman.updateDirection("D");
    }
    else if(e.code == "ArrowLeft" || e.code == "KeyA"){
        pacman.updateDirection("L");
    }
    else if(e.code == "ArrowRight" || e.code == "KeyD"){
        pacman.updateDirection("R");
    }
}

class Block {
    constructor(image, x, y, width, height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.startX = x;
        this.startY = y;

        this.direction = "R";
        this.velocityX = 0;
        this.velocityY = 0;

    }

    updateDirection(direction){
        this.direction = direction;
        this.updateDirection();
    }
    updateVelocity(){
        if(this.direction == "U"){
            this.velocityX = 0;
            this.velocityY = -tileSize/4;
        }
        else if(this.direction == "D"){
            this.velocityX = 0;
            this.velocityY = tileSize/4;
        }
        else if(this.direction == "L"){
            this.velocityX = -tileSize/4;
            this.velocityY = 0;
        }
        else if(this.direction == "R"){
            this.velocityX = tileSize/4;
            this.velocityY = 0;
        }
    }
}
    
