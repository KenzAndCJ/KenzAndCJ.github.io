class Terrain {
    constructor() {
        this.dist = windowWidth;
        this.points = [];                
        this.roughness = 0.01;
        this.height = 80;
        this.locY = 100;
        this.spacing = 6;


        for (let x = 0; x < this.dist; x+=this.spacing) {
            let noiseVal = noise((x) * this.roughness, this.roughness);
            let col = 'white';
            if (noiseVal <= 0.2) {
                col = 'white';
            }
            else if (noiseVal <= 0.4) {
                col = 'gray';
            }
            else if (noiseVal <= 0.6)
            {
                col = 'green';
            }
            else if (noiseVal <= 0.8)
            {
                col = 102, 56, 21;
            }
            else{
                col = 'blue';
            }



            this.points.push(new TerrainPoint(x, noiseVal * this.height + (windowHeight - this.locY), col));
        
        }


    }

    display() {


        push();

        strokeWeight(3);
        fill('black');
        beginShape(POINTS);

        this.points.forEach(p => {
            p.display();
        });

        vertex(this.dist + 10, windowHeight + 20);
        vertex(0 - 10, windowHeight + 20);
        endShape(CLOSE);


        pop();
    
    }
}


class TerrainPoint
{
    constructor(x, y, color)
    {
        this.x = x; 
        this.y = y;
        this.color = color;
    }

    display()
    {
        stroke(this.color);
        vertex(this.x, this.y);
    }
}