//Write JavaScript code that generates a random password of length 8 consisting of uppercase letters, lowercase letters, and numbers. (Hint: You can use the Math.random() function to generate random numbers and convert them to characters.)

let password="",random_char,password_length=0
let symbols=['@','#','$','%','&']
while(password_length<8)
{
   random_char=Math.floor(Math.random()*4)+1
   switch(random_char)
   {
     case 1:password=password.concat(String.fromCharCode(65+Math.floor(Math.random()*26)));
            password_length++
            break
     case 2:password=password.concat(String.fromCharCode(97+Math.floor(Math.random()*26)))
            password_length++
            break
     case 3:password=password.concat(symbols[Math.floor(Math.random()*symbols.length)])
            password_length++
            break
     case 4:password=password.concat(String.fromCharCode(48+Math.floor(Math.random()*10)))
            password_length++
            break
   }
}
console.log(password);