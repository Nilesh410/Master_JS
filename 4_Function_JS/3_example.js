/* Function with rest operator 
If function dont know how many parameter they have to take then they used rest operator 
or we dont know exactly how many argument will be passing to the function definition then in the function 
definition we used the rest operator.
syntax :- ...variable name 

*/
/* function display(...items)
{
    console.log(items) //convert all arguments into array of elements 
    console.log(items[0])//100
    console.log(items.length)//no of aruments pass to that variable
}
display(100,200,300,400,500) //[100,200,300,400,500] 100 5  */

function display1(item1,item2,...items)
{
    console.log(item1) //10
    console.log(item2) //20
    console.log(items) //[30,40,50]
}
//display1(10,20,30,40,50)//10 20 [30,40,50]
display1(10)