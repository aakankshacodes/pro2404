class Chain{
    constructor(bodyA, bodyB){
    var options= {
        bodyA: bodyA.body,
        bodyB: bodyB.body,
        stiffness:0.05,
        length:10

    }
 
    this.chain=constraint.create(options)
World.add(world,this.chain)

    
    }
    display(){
        var a=this.chain.bodyA.position
        var b=this.chain.bodyB.position
        line(a.x,a.y,b.x,b.y)

    }
};