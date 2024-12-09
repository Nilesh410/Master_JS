function showMessage()
{
    console.log("Hey there")
}

const obj={
    showMessage,
}

//There are four way to call a function 
//1
showMessage()
//2
let message=new showMessage()
//3
showMessage.call()
//4 
obj.showMessage()