var canvas
var tiles = [];
var turn = "first"; //"second"
var symbol = "O"; //"X"
var gameState = "start";
var heading;
var w,h;

function setup() {
  w = displayWidth/8
  h = 500
  
  createDOMCanvas()
  createHeading();
  createTiles();
  resetButton();
}

function draw() {
  
  if(gameState == "start"){ 
   check();
   }else if(gameState == "end"){
     for(var i in tiles){
       tiles[i].attribute();
     }
   if(symbol=="O") changeColor("O")
   if(symbol=="X") changeColor("X")
   gameState = "wait";
  }
  
}

function createTiles(){
  for(let y=0;y<3;y++){
    for(let x=0;x<3;x++){
      // tile position being passed
      tiles.push(new Tile(w*x,w*y));
    }
  }
}



function check(){
  
    if( (tiles[0].button.html()==tiles[1].button.html() && tiles[1].button.html()==tiles[2].button.html() && tiles[2].button.html()==symbol ) ||
(tiles[3].button.html()==tiles[4].button.html() && tiles[4].button.html()==tiles[5].button.html() &&  tiles[5].button.html()==symbol) ||     (tiles[6].button.html()==tiles[7].button.html() && tiles[7].button.html()==tiles[8].button.html() && tiles[8].button.html()==symbol) ||
       
(tiles[0].button.html()==tiles[3].button.html() && tiles[3].button.html()==tiles[6].button.html() && tiles[6].button.html()==symbol) ||
(tiles[1].button.html()==tiles[4].button.html() && tiles[4].button.html()==tiles[7].button.html()&& tiles[7].button.html()==symbol) ||     (tiles[2].button.html()==tiles[5].button.html() &&
tiles[5].button.html()==tiles[8].button.html() && tiles[8].button.html()==symbol) ||
       
(tiles[0].button.html()==tiles[4].button.html() && tiles[4].button.html()==tiles[8].button.html() && tiles[8].button.html()==symbol) ||
(tiles[2].button.html()==tiles[4].button.html() && tiles[4].button.html()==tiles[6].button.html() && tiles[6].button.html()==symbol) 
   ) 
    {gameState = "end";}
  
}

function changeColor(sym){
  for(var i in tiles ){
    if(tiles[i].button.html() !== sym){
      tiles[i].button.html("",false);
    }
  }
}

function createDOMCanvas(){
  canvas = createDiv();
  canvas.style("border-style:solid");
  canvas.style("border-width:4px");
  canvas.style("border-color:red");
  canvas.style("border-radius:5px");
  canvas.style("font-size:35px");
  canvas.position(10,10);
  canvas.size(displayWidth-10,displayHeight-10);
}

function resetButton(){
  reset = createButton("Reset");
  canvas.child(reset);
  reset.position(displayWidth/2-50,displayHeight-100);
  reset.size(displayWidth/3,50);
  reset.style("background-color:red");
  reset.style("border-radius:5px");
  reset.style("font-size:20px");
  
  reset.touchStarted(()=>{
    gameState = "start";
    for(var i in tiles){
      tiles[i].rmAttribute();
      tiles[i].clear(); 
     }
  })
}

function createHeading(){
  heading = createElement('h1', 'TicTacToe');
  canvas.child(heading)
  heading.position(displayWidth/2-150,10);
  heading.style('color', '#FF0000');
  heading.style('width', '300px');
  heading.style('border', 'dotted');
  heading.style('text-align', 'center');
  
}


 
