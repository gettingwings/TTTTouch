class Tile{
  constructor(x,y,size){
    this.button = createButton("");
    tilesDiv.child(this.button);
    this.button.position(x,y);
    this.button.size(size,size);
    this.button.style("border:4px solid black");
    this.button.style("background-color:red");
    this.button.style("border-radius:10px");
    this.button.style("font-size:45px");
    this.clicked = false;
    this.button.touchStarted(()=>{
      if(turn=="first" && this.clicked==false)        {
        this.button.html("O",false);
        turn = "second";
        symbol = "O";
       }else if(turn=="second" && this.clicked==false){
        this.button.html("X");
        turn = "first";
        symbol = "X";
      }
      this.clicked = true;
    });
    
    this.button.mouseClicked(()=>{
      if(turn=="first" && this.clicked==false)        {
        this.button.html("O",false);
        turn = "second";
        symbol = "O";
       }else if(turn=="second" && this.clicked==false){
        this.button.html("X");
        turn = "first";
        symbol = "X";
      }
      this.clicked = true;
    });
  }
  
  clear(){
    this.button.html("");
    this.button.style("background-color:red");
    this.clicked = false;
    turn = "first";
  }
  
  attribute(){
    this.button.attribute("disabled",true);
  }
  
  rmAttribute(){
    this.button.removeAttribute('disabled');
    this.clicked = false;
    turn = "first";
  }
  
}