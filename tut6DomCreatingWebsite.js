let a=document
a=document.all
//array is made of a and then printed
Array.from(a).forEach(function(element){
    console.log(element)

})
console.log("next")
a=document.links[0]
console.log(a)
a=document.links[0].href
console.log(a)
console.log("hi")