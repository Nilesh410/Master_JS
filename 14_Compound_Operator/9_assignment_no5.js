//Write JavaScript code that counts the number of vowels (a, e, i, o, u) in a string "javascript" and prints the result.

let vowels_count=0;
let str="javascript"

for(let i=0;i<str.length;i++)
{
(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')? vowels_count++              :vowels_count
//    if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
//    {
//     vowels_count++
//    }
   
}
console.log("vowels_count",vowels_count)