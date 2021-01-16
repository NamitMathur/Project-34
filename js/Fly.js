class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.1

        }
        this.fly=Matter.Constraint.create(options);
        World.add(world,this.fly);
    }
}