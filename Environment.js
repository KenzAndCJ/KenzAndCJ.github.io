class Environment
{

    constructor()
    {
		this.tempHr = hour();
        this.hr = this.tempHr >= 18 || this.tempHr <= 6 ? this.tempHr: (this.tempHr + 12)%24;
        var realHr = hour();
		this.isNight = (this.tempHr >= 18 || this.tempHr <= 6);

        

        this.backgroundColor = (this.isNight) ? color(0, 20, 20) : color(185, 232, 255);// : color(50, 100, 200);
        background(this.backgroundColor);

        this.terrain = new Terrain();;
        this.sky = new Sky(100, 8, 14, this.hr, this.isNight);;
    }

    display()
    {

        background(this.backgroundColor);

        this.sky.display();
        this.terrain.display();

    }
}