class Roof{

constructor(x,y,w,h){

    var options={
        isStatic:true
    }

    this.w=w;
    this.h=h;
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)
}


display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("green");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
}



}