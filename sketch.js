var canvas, tilesDiv;
var tiles = [];
var turn = "first"; //"second"
var symbol = "O"; //"X"
var gameState = "start";
var heading;
var w, h;

function setup() {
  
  createDOMCanvas();
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
      tiles[i].button.style("background-color:transparent");
    }
  }
}

function createDOMCanvas(){
  var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
  if(isMobile){
    canw = displayWidth;
    canh = displayHeight;
  }else{
    canw = windowWidth;
    canh = windowHeight;
  }
  
  if(canw<canh){
    w = canw;
    h = canh;
  }else{
    w = canh;
    h = canw;
  }
  
  canvas = createDiv();
  canvas.position(0,0);
  
  canvas.style('display:flex');
  canvas.style('align-self:center');
  canvas.style('flex-direction:column');
  canvas.style('align-items:center');
  canvas.style("border:4px solid red");
  canvas.style("border-radius:5px");
  canvas.style('width:96%');
  canvas.style('height:96%');
  canvas.style('margin:1%');
  canvas.style('position:absolute');
  
  tilesDiv = createDiv();
  canvas.child(tilesDiv);
  tilesDiv.size(3*w/5, 3*w/5)
  tilesDiv.style('align-self:center');
  tilesDiv.style('position:absolute');
  tilesDiv.style('top: 22%');
  //tilesDiv.position(w/5,w/5);
   
}

function createHeading(){
  heading = createElement('h1', 'TicTacToe');
  canvas.child(heading);
  heading.style('align-self:center');
  heading.style('position:absolute');
  heading.style('top: 3%');
  //heading.position(w/5,10);
  heading.size(3*w/5, w/12)
  heading.style('color', '#FF0000');
  heading.style('border', 'dotted');
  heading.style('display:flex')
  heading.style('justify-content', 'center');
  heading.style('align-items', 'center');
  heading.style("font-size:"+w/15+"px");
}


function createTiles(){
  for(let y=0;y<3;y++){
    for(let x=0;x<3;x++){
      tiles.push(new Tile(w/5*x,w/5*y, w/5));
    }
  }
}


function resetButton(){
  reset = createButton("Reset");
  canvas.child(reset);
  reset.style('align-self:center');
  reset.style('position:absolute');
  reset.style('top: 88%');
  //reset.position(2*w/5,4*w/5+30);
  reset.size(w/5,w/13);
  reset.style("background-color:red");
  reset.style("border-radius:5px");
  reset.style("font-size:"+w/20+"px");
  
  
  reset.touchStarted(()=>{
  gameState = "start";
    for(var i in tiles){
      tiles[i].rmAttribute();
      tiles[i].clear();
    }
});
  reset.mousePressed(()=>{
  gameState = "start";
    for(var i in tiles){
      tiles[i].rmAttribute();
      tiles[i].clear();
    }
});
}



