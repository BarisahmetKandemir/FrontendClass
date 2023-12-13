// ``back-tics / templade literals
let text = `
Bu
Bir
Textdir`

let firstname = "Ahmet"
let lastname = "Can"
let text2 = `Welcome ${firstname},${lastname}`
console.log(text2)

    // NUMBERS
let x = 100 / "elma";
console.log(x)
let x2 = 100 / 0;
console.log(x2)

// sayıları str yapma yada str leri sayı yapma.
let x3 = "10";
let y = 20;
console.log(typeof y.toString())
console.log(typeof Number(x))

// sayıların virgülden sonrasını kısaltır
let z = 9.234
console.log(z.toFixed(1))
let a = 9.078
console.log(a.toFixed(2))

// boolean ifadeleri sayılara çevirir
console.log(Number(true))
console.log(Number(false))
console.log(Number("    23  "))

// sayıları tam sayı yapar
// let b = "45.234"
// console.log(perseInt(45.234))
// console.log(b.toFixed(0))

    // ARRAY

const cars = ["fıat","volvo","opel"]
console.log(cars[0])
console.log(cars)
console.log(cars[cars.length-1])
console.log(cars.toString().split(","))

// sondan çıkarma işlemi pop son elemanı çıkarır
// sona eleman ekleme işlemi push eleman ekler
let value = cars.pop()
console.log(cars,value)
cars.push("BMW")
console.log(cars)

// başatan elaman çıkarma işlemi
cars.shift()
console.log(cars)
// başa eleman ekleme
cars.unshift("Volkswagen","Ferrari")
console.log(cars)

// ortaya eleman ekler
const meyveler = ["elma","armut","mandalina"]
meyveler.splice(1,0,"cilek","muz","ayva")
console.log(meyveler)
// (nereye eleman ekleneceği,eklenecek elemandan sonra silinecek eleman sayısı,eklenecek elemanler)
let secmemeyveler = meyveler.slice(-1)
console.log(secmemeyveler)

// elamanlerın arasına istediğimiz işareti koyar
console.log(cars.join(" - "))

// kümeleri birleştirme
const cars2 = ["audi","mercedes","porsche"]
const allcars = cars.concat(cars2)
console.log(allcars)

// stort (sıralama)
console.log(meyveler.sort())

// tersten sıralar
console.log(meyveler.reverse())

// sayıları sıralama
const numbers = [1,100,20,45]
console.log(numbers.sort(function(a,b){return a-b}))
// büyükten küçüğe sıralar
console.log(numbers.sort(function(a,b){return b-a}))

// küme içinde sıralama yapma
const cars3 = [{type:"Volvo",year:2016},{type:"Fıat",year:2001},{type:"BMW",year:2010}]
console.log(cars3)
console.log(cars3.sort(function(a,b){return a.year-b.year}))

    // İTARATİON(döngüler)

// her bir elemanı açar ve index,,valulerine ayırır
const numbers2 = [45,5,6,55,77]
numbers2.forEach(
    function myFunction(value,index,array){

        numbers2[index] += 1 
        console.log(value)
        console.log(index)
        console.log(array)
    }
)
console.log(numbers2)

console.log(" ")

// map fonksiyon içinde işlem yapar arttırma çarpma gibi
const numbers3 = numbers2.map(myFunction)
function myFunction(value,index,array){
    return value * 2
}
console.log(numbers3)

// belirli bir aralıktaki sayıları verir
const numbers4 = [45,5,6,55,77]
const over18 = numbers4.filter(filterFunc)
function filterFunc(val,ind,arr){
    return val > 18
}
console.log(over18)

// belirli aralıktaki bulduğu ilk sayıyı verir
let first = numbers4.find(findFunc)
function findFunc(val,ind,arr){
    return val > 18
} 
console.log(first)






