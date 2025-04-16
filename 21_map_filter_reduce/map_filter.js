const students=[
    {
        name:"Rajesh",
        elective:"DIP",
        marks:24
    },
    {
        name:"Radhika",
        elective:"AJP",
        marks:23
    },
    {
        name:"Gaurav",
        elective:"DIP",
        marks:26
    },
    {
        name:"Vaibhav",
        elective:"AJP",
        marks:27
    },
    {
        name:"Aakash",
        elective:"CN",
        marks:30
    },
]
const filtered_std=students.filter((student)=>{
    return (student.elective==="AJP"&&student.marks>25)
}).map((student)=>{
    return (`${student.name}:${student.marks}`)
})

console.log(filtered_std)