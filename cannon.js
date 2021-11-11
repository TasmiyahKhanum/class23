class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle;
        this.image = loadImage("assets/cannonBase.png");
        this.cannimage = loadImage("assets/canon.png");
        

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.cannimage,this.x,this.y,this.w,this.h);
        pop();
        image(this.image,70,20,200,200);
        noFill();

   }
}