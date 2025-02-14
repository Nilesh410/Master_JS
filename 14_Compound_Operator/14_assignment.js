let model="Model 14";

let priceList={
    'Model 14':40000,
    'Model 15':50000,
    'Model 16':60000
};
let tax=18;
function calculateTotal(price,tax)
{
    return (price+(price*(tax/100)));
}
if(priceList.hasOwnProperty(model))
{
    console.log(calculateTotal(priceList[model],tax))
}
else{
    console.log("Not present");
}