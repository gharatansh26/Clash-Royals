class Cannon {
    constructor(x,y,r){
        var options ={ isStatic:true}
      
        this.body =  Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("Cannon.png")
        
      }
      display()
      {
          imageMode(CENTER);
          image(this.image,this.body.position.x, this.body.position.y,100, 110);
      }
    }
    