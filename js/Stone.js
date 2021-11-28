class Stone{
    constructor(x,y,r){
    var Options = {restitution:0.8}
    this.sbody = Bodies.circle(x,y,r,Options)
    this.r = r
    World.add(world,this.sbody)
    }
    show(){
        var pos = this.sbody.position
        push()
        fill ( "white")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
        }
}


















