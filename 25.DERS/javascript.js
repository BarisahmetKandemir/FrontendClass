// FOR İN
let text3 = "";
const person = {
    fname:"John", Iname:"Doe" , age:25
}
for(let a in person){
    console.log(a)
    console.log(person[a])
    console.log(`${a} = ${person[a]}`)
    text3 += person.a
}
console.log(text3)
// person["fname"] = John  person.fname = "John"

const numbers = [45,23,34,67]
for(let x in numbers){
    console.log(x)
    console.log
    console.log(numbers[x])
}


numbers.forEach(myFunction)
function myFunction (val,index,arr){
    console.log(val,index,arr)
}

let languages = "javascript"
for (let x in languages){
    // her bir harfin indexini verir
    console.log(x)
    console.log(languages[x])
}
console.log("-----------------------")

// FOR OF
const cars = ["fiat","opel","bmw"]
for (let x of cars){
    console.log(x)
}

let language = "javascript"
for (let x of language){
    console.log(x)
}

// let person2 = {fname:"ahmet",Iname:"can"}
// for(let n of person2){
//     console.log(n)
// }
console.log("-----------------------------")



// WHİLE /önce kontrol et sonra yap
let i = 0;
while(i<10){
    console.log(i)
    i++;
}
console.log("--------------------------------")

// DO-WHİLE /önce yaz sonra kontrol et
let j = 0;
do {
    console.log(j)
    j ++;
}
while(j<10)

// break ve continue
// döngü içinde kullanılır.
// break döngüden atlar(döngüden çıkar iş bitti)
// continue döngüden atlar ama bi sonraki değerden devameder

for(let ii = 0 ; ii < 10 ; i++){
    if(ii === 3){
        break;
    }
    console.log(ii)
}

for(let i = 0 ; i < 10 ; i++){
    if(i === 3){
        continue;
    }
    console.log(i)
}