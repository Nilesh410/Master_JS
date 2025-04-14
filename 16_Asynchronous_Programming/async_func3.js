function outerFunction() {
    let outerVar = 10;
    function innerFunction() {

        console.log(outerVar);
    }

    return innerFunction;

}
let closureFunc = outerFunction();
closureFunc();
console.log(closureFunc)