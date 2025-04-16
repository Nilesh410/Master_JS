/* 
Given an array of objects representing products with a price property, calculate the total cost of all products after applying a 10% discount.
const products = [
{ name: 'Product 1', price: 100 },
{ name: 'Product 2', price: 200 },
{ name: 'Product 3', price: 300 }
];
// Your code here
//Expected Output: 540
*/
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 }
    ]

const total_cost=products.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue.price
},0)
const afterdiscount_totalcost=(total_cost-(total_cost*0.10))
console.log(afterdiscount_totalcost);