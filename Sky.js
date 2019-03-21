class Sky
{
    constructor(numStars, maxSize, numClouds, hour, isNight)
    {
        this.numStars = numStars;
        this.maxSize = maxSize;
        this.numClouds = numClouds;
        this.stars = [];
        this.clouds = [];
        this.moon = new Moon(hour, isNight);
        this.isNight = isNight;

        for (let i = 0; i < numStars; i++)
        {
            this.stars.push(new Star(maxSize));
        }

        for (let i = 0; i < numClouds; i++)
        {
            this.clouds.push(new Cloud(3));
        }
    }

    display()
    {


        if (this.isNight)
        {

            for (let s of this.stars)
            {
               s.display();
           }
        }
        else
        {
            for (let c of this.clouds)
            {
                c.display();
            }
        }


        this.moon.display();


    }
}


class Star
{
    constructor(max)
    {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight - 100);
        this.size = random(1, max);
    }

    display()
    {
        push();

        fill('white');
        ellipse(this.x, this.y, this.size, this.size);

        pop();
    }
}


class Cloud
{
    constructor(cloudOptions)
    {
        this.x = random(0, windowWidth);
        this.y = random(0,windowHeight - 300);
        this.scale = random(0.5,2);
        var cn = random(0, cloudOptions-1);
        this.img = createImg('assets/cloud' + Math.round(cn) + '.png');
    }

    display()
    {        
        image(this.img, 
            this.x - ((this.img.width * this.scale)/2),
            this.y,
            this.img.width * this.scale, 
            this.img.height * this.scale);

    }
}