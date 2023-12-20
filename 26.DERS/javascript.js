// OBJECT

const person = {
    firstName:"Ahmet",
    lastName:"can"
}

const m = person ;
m.firstName = "Mehmet"
console.log(person)
// array içinde geçerlidir
let sayı = 1;
let sayı2 = sayı;
sayı2++;
console.log(sayı)

const person2 = {
    firstName:"Ahmet",
    firtName:"Ahmet",
    lastName:"can"
}

// eleman silme
delete person2.firstName
console.log(person)

// value değerlerini dizi olarak alır
console.log(Object.values(person))

// keys anahtarları dizi olarak çıkartır
console.log(Object.keys(person))

//cümleyi tamamen çıkarır 
console.log(Object.entries(person))

// ders sorusu
console.log(Object.values(person)[1])

// FONKSİYONLAR
function topla(x,y=2){
    return x + y ;
}
console.log(topla(4,5))

// rest parametresi
function toplam2(...args){
    let sum = 0 ;
    for (let arg of args){
        sum += arg ;
    }
    return sum;
}
console.log(toplam2(2,3,4,5))

// self-inkove
function self(){
    console.log("self-invoke")
}
self()

            // CLASS DETAİL
class Car {
    constructor(name){
        this.name = name
    }
    Hello(){
        console.log("hello")
    }
    static hello2(){
        console.log("hello static func")
    }
}
let car1 = new Car("ford")
console.log(car1)
car1.Hello()
Car.hello2()

// CLASS İNHERİTANCE - KALITIM
// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     showInfos(){
//         console.log(`İsim: ${this.name} Yaş: ${this.age}`)
//     }
// }
// class Employye extends Person {
//     constructor(name,age,salary){
//         // this.name = name
//         // this.age = age
//         super(name,age)
//         this.salary = salary
//     }
// }
// const emp = new Employee("Barış",25,2500)
// console.log(emp)


//CALLBACK iç içe fonksiyonlar
function display(message){
    console.log(message)
}
function first(){
    display("hello")
}
function second(){
    display("goodbye")
}
first()
second()


function display(some3){
    console.log(some3)
}
function calc(num1,num2){
    let sum = num1 + num2
    display(sum)
}
calc(3,5)


function display2(some2){
    console.log(some2)
}
function calc(num1,num2){
    let sum = num1 + num2
    return sum;
}
let result = calc(3,5)
display2(result)

function display2(some){
    console.log(some)
};
function calc(num1,num2,myCallback = () => {}){
    let sum = num1 + num2;
    myCallback(sum)
    return sum;
}
calc(4,5)
















































