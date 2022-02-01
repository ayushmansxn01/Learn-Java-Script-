console.log('this is dom')

let lk=document.querySelector('.container')
console.log(lk.childNodes)// gives all the items(comments, lines,headings etc)
console.log(lk.children)   // gives only the html codes elements)
let nodename= lk.childNodes[0].nodeName
console.log(nodename)
let nodetype= lk.childNodes[0].nodeType
console.log(nodetype)

// 1: Element
// 2: Attribute
// 3:Text nodename
// 8: Comment
// 9: Document
// 10: doc type
let container=document.querySelector('div.container')
console.log(container.children[0].children)
console.log(container.firstChild)// first sub element
console.log(container.firstElementChild)// first element
console.log(container.lastChild)
console.log(container.childElementCount)
