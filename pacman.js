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

