const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = {};

fruits.forEach((fruit)=>{
    if(fruitCount[fruit])
    {
        fruitCount[fruit]++
    }
    else
        fruitCount[fruit]=1
})

console.log(fruitCount)