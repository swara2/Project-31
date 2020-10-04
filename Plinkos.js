class Plinkos{
    constructor(x,y,radius) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255);
        ellipse(0, 0, this.radius, this.radius);
        this.color =color(random,(0,225),random(0,225));
        pop();
      }
    };  