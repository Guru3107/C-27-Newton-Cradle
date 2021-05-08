class Rope {
    constructor(bodyA, bodyB,offsetX,offsetY) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness : 1,
           
        }
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
  
    display() {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
    }

}