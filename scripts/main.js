let myImage = document.querySelector("img");

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute("src");
    if(mySrc == "images/pic1.png")
    {
        myImage.setAttribute("src", "images/pic2.png");
    }
    else
    {
        myImage.setAttribute("src", "images/pic1.png");
    }
}

let myButton = document.getElementById("btnChange");
let myHeading = document.querySelector("h1");

function SetUserName()
{
    let myName = prompt("Please enter your name.");
    if(!myName)
    {
        SetUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name"))
{
    SetUserName();
}
else
{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function()
{
    SetUserName();
}
