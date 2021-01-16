class Monster{
    constructor(x,y,r){
        var options={
            density:1
        }
        this.image=loadImage("images/Monster-02.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}