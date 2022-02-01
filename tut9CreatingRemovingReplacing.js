console.log("this is start")
let element = document.createElement('li')
let text =document.createTextNode('I am text node')
element.appendChild(text)
element.id='newChild'
element.className='second'
element.setAttribute('title', 'mytitle')
// element.innerText='<b>This is created by  Ayush</b>'
// element.innerHTML='<b>This is created by Ayush</b>'
let ul=document.querySelector('ul.first')
ul.appendChild(element)
console.log(ul)
console.log(element)