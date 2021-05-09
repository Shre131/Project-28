class MANGO {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image=loadImage("mango.png");
  
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };
