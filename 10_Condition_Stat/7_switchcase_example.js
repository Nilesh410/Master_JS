const favColor = prompt('Enter the color value')

switch (favColor.toLowerCase()) {
  case 'red':
    console.log('Red is a passionate color!')
    break
  case 'blue':
    console.log('Blue is calming and serene.')
    break
  case 'green':
    console.log('Green symbolizes nature and growth.')
    break
  default:
    console.log(`${favColor} is also my favorite color`)
}
