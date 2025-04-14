let num = 5;
function outerFunc() {
    let num = 10;
    setTimeout(function() {
        console.log(num);
    }, 1000);
}
outerFunc();