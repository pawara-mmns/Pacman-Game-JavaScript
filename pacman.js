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
    "X  X     P     X  X",
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
const food = new Set();
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

class Block {
    constructor(image, x, y, width, height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.startX = x;
        this.startY = y;
    }
}

