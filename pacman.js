//board
let board;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardwidth = columnCount * tileSize;
const boardheight = rowCount * tileSize;
let context;

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");
}
