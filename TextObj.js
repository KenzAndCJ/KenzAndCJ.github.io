class TextObj
{
    constructor(message, x, y, color, size)
    {
        this.message = message;
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
    }

    display()
    {
        push();

        fill(this.color);
        textSize(this.size);
        text(this.message, this.x, this.y);

        pop();        
    }
}