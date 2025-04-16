const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square_odd=numbers.filter((number)=>{
    return (number%2!==0)})
    .map((number)=>{return number*number})

console.log(square_odd)