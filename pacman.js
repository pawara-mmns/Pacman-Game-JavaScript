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
}

function loadImages(){
    wallImage = new Image();
    wallImage.src = "images/wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "images/blueGhost.png";

    orangeGhostImage = new Image();
    orangeGhostImage.src = "images/orangeGhost.png";

    pinkGhostImage = new Image();
    pinkGhostImage.src = "images/pinkGhost.png";

    redGhostImage = new Image();
    redGhostImage.src = "images/redGhost.png";

    //pac-man images

    pacmanUpImage = new Image();
    pacmanUpImage.src = "images/pacmanUp.png";

    pacmanDownImage = new Image();
    pacmanDownImage.src = "images/pacmanDown.png";

    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "images/pacmanLeft.png";

    pacmanRightImage = new Image();
    pacmanRightImage.src = "images/pacmanRight.png";

    
}

