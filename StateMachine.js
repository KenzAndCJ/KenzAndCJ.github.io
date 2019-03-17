const States =
    {
        Loading: "Loading",
        HomePage: "Home",
        About: "About",
    }

class StateMachine
{
    constructor()
    {
        this.state = States.Loading;
    }

    changeState(state)
    {
        this.state = state;
    }
}