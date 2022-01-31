let arr=[1,44,[47,99],21]
console.log(arr[1])
let val= arr.indexOf(21)
console.log(val)
arr.push(97)            // push 97 to end
arr.unshift(100)       // adds 100 to the beginning
arr.pop()          // removes from end
arr.shift()     //removes from beginnig
arr.splice(2,3)     //deletes element starting from index 2 and deletes till (2+3=5) 5 index
arr.reverse()
let arr1=[1,2,3,4]
arr=arr.concat(arr1)
console.log(arr)        // adds (concats) two array


//OBJECT IN JS

let obj={
    name:"Ayushman",
    city:"Lucknow"
}
console.log(obj.city)           //these are  two ways to call elements of an object
console.log(obj['name'])
