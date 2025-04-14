const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};
// let properties = "";
// for(const value in student)
// {
//     properties +=`${value}:${student[value]},`
// }
// console.log(properties);

let entry=Object.entries(student)
for(const entry_value of entry)
{
    console.log(entry_value)
}
for(const values in student)
{
    console.log(`${values}:${student[values]}`);
}