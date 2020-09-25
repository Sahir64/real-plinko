class Plinko {

    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0.6,
            friction: 0.5,
            density: 0.5
        }

        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, 10, 10);
        pop();
    }
}