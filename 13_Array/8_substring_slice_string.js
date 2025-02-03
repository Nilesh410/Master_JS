let str="JavaScript"

console.log(str.slice(4, 10)); // "Script"
console.log(str.slice(4, -1)); // "Scrip"
console.log(str.slice(-6, -1)); // "Scrip"
console.log(str.slice(7, 4)); // "" (Invalid range)

console.log(str)//JavaScript

console.log(str.substring(4, 10)); // "Script"
console.log(str.substring(4, -1)); // "Java" (Negative treated as 0)and swap the indices
console.log(str.substring(7, 4)); // "Scr" (Swaps indices)
console.log(str.substring(7, 7)); // "" (Empty range)

/* 
slice()
 -> Supported; counts from the end of the string.
 ->Does not swap indices; invalid range returns an empty string.
 ->Does not modify the original string.

substring()=>
 -> Not supported; negative values treated as 0.
 -> Automatically swaps indices if startIndex > endIndex.
 -> Does not modify the original string.
 */