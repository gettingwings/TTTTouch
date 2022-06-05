var canvas
var tiles = [];
var turn = "first"; //"second"
var symbol = "O"; //"X"
var gameState = "start";
var heading;
var w,h;

function setup() {
  canvas = createDiv();
  w = windowWidth
  h = windowHeight
  canvas.position(windowWidth/5,windowHeight/5);
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
      tiles.push(new Tile(90*x,90*y));
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

function resetButton(){
  reset = createButton("Reset");
  canvas.child(reset);
  reset.position(100,330);
  reset.size(100,50);
  reset.style("background-color:red");
  reset.style("border-radius:5px");
  reset.style("font-size:20px");
  
  reset.mousePressed(()=>{
    gameState = "start";
    for(var i in tiles){
      tiles[i].rmAttribute();
      tiles[i].clear(); 
     }
  })
}

function createHeading(){
  heading = createElement('h1', 'TicTacToe');
  heading.position(windowWidth/5,10);
  heading.style('color', '#FF0000');
  heading.style('width', '300px');
  heading.style('border', 'dotted');
  heading.style('text-align', 'center');
  
}

function changeColor(sym){
  for(var i in tiles ){
    if(tiles[i].button.html() !== sym){
      tiles[i].button.html("",false);
    }
  }
}
 
