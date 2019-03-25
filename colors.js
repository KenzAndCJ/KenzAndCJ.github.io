function SaveColors() 
{
    for (let i =0; i < 24; i++)
    {
        localStorage.setItem(i + "col", document.getElementById(i + "col").value);
    }
}

function LoadColors()
{
    for (let i = 0; i < 24; i++)
    {
        document.getElementById(i + "col").value = localStorage.getItem(i + "col");
    }
}