let months=["Jan",'Feb','Mar','June','Aug',"Oct",'Nov','Dec']

const month_data=months.map((month1,index,array)=>{
   // console.log(index,month1)
   //console.log(array)
   return (month1)
})
console.log(month_data)

const filter_data=months.filter((month)=>{
    //return month.length>3

    return month.toLowerCase().includes('a')
})
console.log(filter_data);

