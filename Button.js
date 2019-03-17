class ButtonState
{
    constructor(normal, hover, pressed, released)
    {
        this.normal = normal;
        this.hover = hover;
        this.pressed = pressed;
        this.released = released;


        this.state = this.normal;
    }

}


class Button
{
    constructor(x, y, w, h, cornerRadius, outlineColor, outlineSize, text, buttonState)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.state = buttonState;
        this.cornerRadius = cornerRadius;
        this.outlineColor = outlineColor;
        this.outlineSize = outlineSize;
    }

    display()
    {

        this.checkState();


        push();

        stroke(this.outlineColor);
        strokeWeight(this.outlineSize);
        fill(this.state.state);

        rect(this.x, this.y, this.w, this.h, this.cornerRadius);

        pop();



        //Text
        
        var xOff = this.x + 6;
        var yOff = this.y + 44;


        this.text.x += xOff;
        this.text.y += yOff;

        this.text.display();

        this.text.x -= xOff;
        this.text.y -= yOff;
    }








    containsMouse()
    {
        if (mouseX >= this.x && mouseX <= this.x + this.w &&
            mouseY >= this.y && mouseY <= this.y + this.h)
        {
            return true;
        }

        return false;
    }

    checkState()
    {

        if (this.containsMouse())
        {
            //click
            if (mouseIsPressed)
            {
                this.state.state = this.state.pressed;
            }
            else
            {
                //released
                if (this.state.state == this.state.pressed)
                {
                    this.state.state = this.state.released;
                }
                //hover					
                else
                {
                    this.state.state = this.state.hover;
                }
            }
        }
        //normal
        else
        {
            this.state.state = this.state.normal;
        }
        

    }

  
}