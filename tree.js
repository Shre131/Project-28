class TREE {
    constructor(x,y) {
      //var options = {
       
      //}
      this.width = 450;
      this.height=600;
      this.thickness=10;
      this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true})
      this.leftBody = Bodies.rectangle(0,y-this.height/2,this.thickness,this.height,{isStatic:false});
      this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,{isStatic:false});
      World.add(world, this.bottomBody);

      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
      this.image=loadImage("tree.png");
    }
    display(){
      push();
      var pos =this.bottomBody.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
