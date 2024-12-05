console.log(null)//null
console.log(null+1)//1
console.log(12/null)//infinity
console.log(null==0)//false
console.log(null===0)//false
console.log(null>0)//false
console.log(null<0)//false
console.log(null>=0)//true
console.log(null<=0)//true

let data=null
console.log("data=",data)//null
console.log("datatype of data=",typeof(data))//object

//convert to number
let u_data=Number(data)
console.log("u_data=",u_data)//0
console.log(data==u_data)//false
console.log(u_data==0)//true
console.log(u_data===0)//true
