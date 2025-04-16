const numbers = [1, 2, 3, 4, 5];

const output=numbers.reduce((previousValue,currentValue)=>{
    return previousValue*currentValue
})
console.log(output)