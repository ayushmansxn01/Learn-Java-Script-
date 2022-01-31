greet=" Good morning "
name="Ayushman "
num1=18
num2=87
console.log(name+greet+num1+num2)
let html;
html= "<h1>Hello there</h1>" +
"<p>This is greating from one of the greatest person on earth</p>";

html.concat(' Wonderful', "person in the world")
console.log(html.length)
console.log(html.toUpperCase())
console.log(html[4])
console.log(html.indexOf('<'))
// console.log(html.lastindexOf('<'))
console.log(html.charAt(9))
console.log(html.endsWith('earth'))
console.log(html.includes('fg'))
console.log(html.substring(0,9))
console.log(html.slice(-4))
console.log(html.split(' ')) // splits and returns array of split characters
console.log(html.replace('of', 'in')) // replace the first occurance

fruit='mango'
let myhtml=`Hello ${name}
            <h1>This is Heading<h1/>
            <p>You like ${fruit}</p>`


document.body.innerHTML=myhtml    // to display the text on html page




