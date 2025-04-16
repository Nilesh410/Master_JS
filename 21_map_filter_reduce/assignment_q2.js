const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const odd_num=numbers.filter((number)=>{
    return (number%2!==0)
})
console.log(odd_num);