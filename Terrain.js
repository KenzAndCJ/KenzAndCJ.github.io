class Terrain {
    constructor() {
        this.dist = windowWidth;
        this.roughness = 0.01;
        this.height = 80;
        this.locY = 100;
    }

    display() {


        push();

        strokeWeight(3);
        fill('black');
        beginShape(POINTS);

        for (let x = 0; x < this.dist; x++) {
            let noiseVal = noise((x) * this.roughness, this.roughness);

            if (noiseVal <= 0.2) {
                stroke('white');
            }
            else if (noiseVal <= 0.4) {
                stroke('gray');
            }
            else if (noiseVal <= 0.6)
            {
                stroke('green');
            }
            else if (noiseVal <= 0.8)
            {
                stroke(102, 56, 21);
            }
            else{
                stroke('blue');
            }



            vertex(x, noiseVal * this.height + (windowHeight - this.locY));
        
        }

        vertex(this.dist + 10, windowHeight + 20);
        vertex(0 - 10, windowHeight + 20);
        endShape(CLOSE);


        pop();
    
    }
}