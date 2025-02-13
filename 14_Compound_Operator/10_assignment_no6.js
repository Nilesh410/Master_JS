//Write JavaScript code that prints the Fibonacci sequence up to the 10th term. (The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting with 0 and 1.)

let max_count=10
let n1=0,n2=1,fibonacci_no
let next_ele=0

for(let i=1;i<=max_count;i++)
{
    fibonacci_no=n1
    console.log(fibonacci_no)
    next_ele=n1+n2
    n1=n2
    n2=next_ele
}
