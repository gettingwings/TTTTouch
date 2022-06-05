class Tile{
  constructor(x,y){
    this.button = createButton("");
    canvas.child(this.button);
    this.button.position(x,y);
    this.button.size(90,90);
    this.button.style("background-color:red");
    this.button.style("border-radius:5px");
    this.button.style("font-size:35px");
    this.clicked = false;
    this.button.touchEnded(()=>{
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
