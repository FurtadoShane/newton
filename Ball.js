class Ball{

    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':2,
            'friction':0,
            'density':0.8
        }

        this.body=Bodies.circle(this.x,this.y,80,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        push();
        translate(posX,posY);
        ellipseMode(CENTER);
        strokeWeight(0);       
        fill("white");
        ellipse(0,0,80,80);

        pop();
    }

}