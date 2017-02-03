onload=function()
{
    setBackground("Hello World!");
}

function setBackground(str)
{
    var hello = document.createElement("p");
    var helloText=document.createTextNode(str);
    hello.appendChild(helloText);
    var Bd=document.getElementsByTagName("body");
    Bd[0].appendChild(hello);
}