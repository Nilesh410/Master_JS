function outerFunction()
{
    let count =0;
    return function(){
        return ++count;
    };
}

let counter1=outerFunction()
let counter2=outerFunction()

console.log(counter1())
console.log(counter2())