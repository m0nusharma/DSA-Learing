// functions
// function greet(name){
// console.log(`Namaste ${name}`)
// }

// greet("Monu")

// function sum(a, b){  // arguments
//     console.log(a +b)
// }
// sum(10, 20)

// function multiply(a, b){  // arguments
//     console.log(a * b)
// }
// multiply(10,15)


// function square(a){  
// let result = a*a
// return result
// }
// let value = square(10)
// console.log(value)

// conditions
// function canVote(age){
// if (age >= 18){
//     console.log(`yes, You can vote. because u are ${age}`)
// }else{
//     console.log(`No, you can't vote this time. Because You are ${age}`)
// }
// return age
// }

// console.log(canVote(50))


// function isEven(num){
//     let rem = num % 2;
//     if (rem ===0){
//         console.log(`${num} is even number`)
//     }else{
//             console.log(`${num} this is odd number`)
//     }
//     return rem

// }

// isEven(10)

// loop class

// for(let i =0 ; i <10; i++){
//     console.log(`${i} hello world`)
// }


// let arr = [1,2,3,4,5,6,7,8]
// for(let i  = 0; i < arr.length; i++){
//     if(arr[i] % 2  === 0){
//        console.log(arr[i])
//     }
// }

// let i = 0;
// while(i < arr.length){
//  if(arr[i] % 2  === 0){
//     console.log(arr[i])
//     }
// i++
// }


// find index number 
// let arr = [10 , 21, 52, 6, 41, 95, 22] 
// function searchIndex(arr, x) {
//     for (let i = 0; i < arr.length; i++){
//     if(arr[i]==x){
//         return i;
//     }
// }
// return -1;
// }

// let result = searchIndex(arr, 52)
// console.log(result)

// find negative number
let arr = [-10, -18, 17 , 15, 21, -15]
function negativeValue() {
    let count = 0;
    for(let i =0; i < arr.length; i++){
        if(arr[i]<0){
        count++
        }
    }
    return count
}
 let value = negativeValue()
 console.log(value)