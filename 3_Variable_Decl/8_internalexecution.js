console.log("Study the scope of var variable");
var a=5
if(a>10)
{
    var num=10;
    console.log("value of num:",num);
}
else
{
    console.log("value of num:",num);
}

console.log("value of num:",num);