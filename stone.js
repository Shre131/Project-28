class STONE {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image=loadImage("stone.png");
  
      World.add(world,this.body);
    }
    display(){
      push();
      
      var pos =this.body.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0, this.radius,this.radius);
      pop();
    }
  };
