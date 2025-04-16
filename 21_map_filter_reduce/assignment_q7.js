/* 
Given three arrays, names, ages, and cities, write a program to combine them into one array of objects where each object contains a name, age, and city property.
const names = ['Alice', 'Bob', 'Charlie'];
const ages = [25, 30, 35];
const cities = ['New York', 'Los Angeles', 'Chicago'];
// Your code here
// Expected Output: [
// { name: 'Alice', age: 25, city: 'New York' },
// { name: 'Bob', age: 30, city: 'Los Angeles' },
// { name: 'Charlie', age: 35, city: 'Chicago' }
// ] */

const names = ['Alice', 'Bob', 'Charlie'];
const ages = [25, 30, 35];
const cities = ['New York', 'Los Angeles', 'Chicago'];

const students=names.map((name,index)=>({
    name:name,age:ages[index],city:cities[index]}))

console.log(students)