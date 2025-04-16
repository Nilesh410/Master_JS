//Find out the total cost of the cart?

const cart=[
    {
        product:'airpod',
        price:2500,
        quantity:1
    },
    {
        product:'mobile',
        price:35000,
        quantity:2
    },
    {
        product:'tv',
        price:42500,
        quantity:1
    }
]

let total_cost=cart.reduce((previousValue,currentValue,index)=>{
        return previousValue+currentValue.price
},0)
console.log('total cost of cart:',total_cost);