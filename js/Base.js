class Base{
    constructor(x,y,width,height,color){
   var Options = {
   isStatic:true
   }
  this.body = Matter.Bodies.rectangle(x,y,width,height,Options)
  this.w = width
 this.h = height
 this.c = color
 World.add(world,this.body);
    }
  show(){
  var pos = this.body.position    
  push()
  translate (pos.x,pos.y)
  fill(this.c);
  rectMode(CENTER)
  rect(0,0,this.w,this.h)
  pop()
  }  
}