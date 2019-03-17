class Sky
{
    constructor(numStars, maxSize, hour, isNight)
    {
        this.numStars = numStars;
        this.maxSize = maxSize;
        this.stars = [];
        this.moon = new Moon(hour, isNight);
        this.isNight = isNight;

        for (let i = 0; i < numStars; i++)
        {
            this.stars.push(new Star(maxSize));
        }
    }

    display()
    {


        // if (this.isNight)
        // {

            for (let s of this.stars)
            {
               s.display();
           }

            this.moon.display();

        //}

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