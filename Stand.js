class Stand{

    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.body,400,20,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        push();
        translate(posX,posY);
        rectMode(CENTER);
        fill("white");
        rect(0,0,400,20);

        pop();
    }

}