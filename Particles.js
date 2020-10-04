class Particles{
    constructor(x,y,radius) {
        var options = {
            'restitution':0.4
        
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r=r,options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        this.color =color(random,(0,225),random(0,225));
        pop();
      }
    };  