// oerators

// let x = 5 ;
// let y = 4;
// let z = x%y ;
// console.log(z)


let x = 5 ;
let y = 4;
let z = x**y ;
console.log(z)

let a = 100 + 50 *3 ;
console.log(a);

let b = 5 ;
// b = b + 3 ;
b += 3
console.log(b)
b++;
console.log(b)
b--;
console.log(b)

let text1 = "Mustafa"
let text2 ="Önal"
let text3 = text1 + text2 ;
console.log(text3)
let text4 = " frontent developer"
text3 += text4 ;
console.log(text3)

let m1 = "5" + "4";
console.log(m1)
let m2 = 5 + 3 + "4" ;
console.log(m2)
let m3 = "5" + 3 ;
console.log(m3)
let m4 = "5 + 3"
console.log(m4)


// DATA_TYPES

// numbers

let length = 16
let weigth = 7.5

// string
let name = "Mustafa"
let color = 'Red'

// Boolean
let c = true;
let d = false;

// obejct
// const person = {fistName:"John",age:25}

//array
const cars = ["volvo","audi",{name:"audi",age:2}]
console.log(cars[2].name)

// tarih ataması
const date = new Date("2022-03-25 12:25:32")
console.log(date)

let x2 ;
console.log(x2)

let bigNumber = 123e5
console.log(bigNumber)

let bignumber = 123e5
console.log(typeof bignumber)



// FUNCTİON

// function myfunction(parameter1,parameter2){codeblock }
// myFunction(argument1,argument2)

//let a = function () {}

function topla(sayı1,sayı2){
    return sayı1 + sayı2
}
console.log(topla(8,28))
console.log(topla(17,83))
console.log(topla(67,3))

function toCelcius(fahrenheit){
    return fahrenheit + "fahrenheit = " + ((5/9) * (fahrenheit - 32)) + "celcius'dur"
}
console.log(toCelcius(233))


// object

function person2(firstname,lastname,age,eyecolor){
    const person2info = {
        firstname: firstname,
        lastname: lastname,
        age:age,
        eyecolor:eyecolor
    }
    console.log(person2info)
}

person2("ahmet","çelik",23,"brown")
person2("Barış","Kandemir",14,"brown")

const person = {
    firstName:"Barış",
    lastName:"Kandemir",
    age:14,
    eyecolor:"blue",
    fullName:function fullNameFunc(){return this.firstName + " " + this.lastName}
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())