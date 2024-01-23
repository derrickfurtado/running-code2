console.log(`Hello, World!`)

const firstName = 'Derrick'

// this doesn't work because of the Constant variable that was already declared
// firstName = 'Don'

let age = 28

console.log(`Hello, my name is ${firstName} and I am ${age} years old`)

const isCool = true
const hasKids = true

let height;
let height2 = undefined // same as line 15



height = `5ft, 9in`

console.log(height) // this must come after height is defined ... else it will show undefined

// review Modulo

let x = 7 % 3 

console.log(x)

const num1 = 6
const num2 = 4.234

let y = num1 % num2

console.log('Original: ',num1 + num2)
console.log(Math.round(num1 + num2)) // round syntax will round the remainder down to the next integer

let scottAge = 39 // three posibilities for console.log

if (age > scottAge){
    console.log('I am older than Scott')
} else if (age === scottAge) {
    console.log('I am the same age as Scott')

}

else {
    console.log('I am younter than Scott')
}

if(age !== scottAge) //NOT operator in JavaScript is !==
{ 
    console.log('I am not the same age as Scott')
}
else 
{
    console.log('We are the same age')
}