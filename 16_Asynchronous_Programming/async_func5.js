function example(arr1)
{
    console.log("Hi array elements are:")
    setTimeout(()=>{
        for(const value of arr1)
        {
            console.log(value)
        }
    },1000);
    console.log("where are the elements ?")
}
let ele=[10,20,30,40]
example(ele)