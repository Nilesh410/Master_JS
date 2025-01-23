/* 
function display()
{
    console.log(a)
    a=20
    console.log(a)
}

display()
let a=10 */
//After declaration and initialization of a let variable shows error to access in function but not for var type

function display() {
  console.log(a)
  a = 20
  console.log(a)
}
var a
display()
