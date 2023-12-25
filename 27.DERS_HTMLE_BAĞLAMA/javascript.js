// settime setinterval fonksiyonları(kaç saniye sonra yazılacağı verilir 1 seferlik olur)
function myFunction(){
   console.log("function runing")
}
setTimeout(myFunction,999000)
// setTimeout sürekli olarak devam eder
setInterval(myFunction,999000)

// PROMİSE OBJECT (callback hell çözümü)

// ÖRNEK
// let myPromise = new Promise(function(myResolve,myReject){
// coding...
// myResolve(result value)//başarı durumunu gösterir
// myReject(error object)// hata durumunu gösterir
// })
// myPromise.then(
// function(value) //code başarılı olduğunda çalışır
// function(error) //code başarısız olduğunda çalışır
// )

function myDisplayer(some){
    console.log(some)
}
let myPromise = new Promise(function(myResolve,myReject){
    let a = 0 ;
    if(a == 0) {
        myResolve("OK")
    }
    else {
        myReject("Error")
    }
})
myPromise.then(
    function(value){
        myDisplayer(value)
    },
    function(error) {
        myDisplayer(error)
    }
)

myPromise
.then(function(value){myDisplayer(value)})
.catch(function(error){myDisplayer(error)})
.finally(myDisplayer("Son function"))

let myPromise2 = new Promise(function(myResolve,myReject){
   setTimeout(function(){myResolve("I love you")},999000)
})


myPromise2.then(function(value){
    console.log(myPromise2)
})
console.log(myPromise2)
// üç farklı state var panding(bekleme),fulfilled ve resolve(başarılı),rejected(başarısız)


//ASYNC VE AWAİT FONKSİYONLARI
// async
function myFunction(){
    return Promise.resolve("Hello")
}
async function muFunction2(){
    return "Hello"
}
// ikiside yanı içeriktir
myFunction().then(function(value){console.log("başarı",value)},function(error){console.log("hata",error)})

// await(bekletme)
async function myDisplay(){
    let myPromise = new Promise(function(resolve,reject){setTimeout(function(){resolve("I love you")},3000)})
    console.log(await myPromise)//await yazılınca sadece bu kod 3sn bekler
}
myDisplay()


async function test(data){
   let prosime = new Promise((resolve,reject ) => {
    setTimeout(()=>{
        if(data){
            resolve("Bu bir değerdir")
        }
        else {
            reject("Bu bir değer değildir")
        }
    },3000)
   })
   console.log("prosime bekleniyor")
   let response = await prosime;
   console.log("prosime bitti")
   return response
}
test(null).then( resolve => console.log(resolve), reject => console.log(reject))

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //DOM(document object model)(HTML e bağlama)
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Id ile bağlama
document.getElementById("demo").innerHTML = "Hello world"
// Türü ile bağlama ör=p,a,h1,img
document.getElementsByTagName("p")[1].innerHTML="Hello city"
// Classına göre bağlama
document.getElementsByClassName("intro")[0].innerHTML = "Hello people"
// 
document.querySelectorAll("p.all")[0].innerHTML = "Hello men"

// İMG leri değiştirme
document.getElementById("img").src = "smiley.gif"
document.getElementById("img").width = "50"


// FORMLARLI değiştirme
function validateForm(){
  let b = document.forms["myForm"]["fname"].value 
    if(b == ""){
        alert("name must filled out")
        return false
    }       
}

// STYLE özelliklerini değiştirme
document.getElementById("demo").style.color = "red"
document.getElementById("demo2").style.backgroundColor = "yellow"
console.log(document.getElementById("demo"))

    // USİNG EVENTS

// Onclick(Tıklandığında değişir)

// function changeColor() {
//     let m = document.getElementById("id1").style.Color = "blue";
// }

function hide(){
    let k = document.getElementById("p2").style.visibility = "hidden"
}

function show(){
    let l = document.getElementById("p2").style.visibility = "visible"
}

function changeText(id){
    id.innerHTML = "Oooooops"
}

// Onchange

function uppercase(){
    const h = document.getElementById("fname");
    h.value = h.value.toUpperCase();
}

// Üsüne geldiğinde değişir

function mOver(obj){
    obj.innerHTML = "Thank you"
    obj.style.backgroundColor = "blue"
    obj.style.color = "white"
}
function mOut(obj){
    obj.innerHTML = "Mouse Over Me"
    obj.style.backgroundColor = "red"
    obj.style.color = "black"
}


document.getElementById("myBtn").addEventListener("click",function(){
    alert("hello world")
})

// Tıkladğında yada Üstüne Geldiğinde yazı yazar

let u = document.getElementById("myBtn")
u.addEventListener("mouseover",myFunctionx)
u.addEventListener("click",mySecondFunctionx)
u.addEventListener("mouseout",myThirdFunctionx)

function myFunctionx(){
    document.getElementById("demo").innerHTML += "Moused over! <br>"
}
function mySecondFunctionx(){
    document.getElementById("demo").innerHTML += "Clickes! <br>"
}
function myThirdFunctionx(){
    document.getElementById("demo").innerHTML += "Moused out <br>"
}

// Bubbling-capturing
// bubbling de önce en içteki işlenir
// capturing de önce en dışdaki öğe işlenir


document.getElementById("myP1").addEventListener("click",function(){
    alert("myP1")
},false
)
document.getElementById("myDiv1").addEventListener("click",
function(){
    alert("myDiv1")
},
false)
document.getElementById("myP2").addEventListener("click",
function(){
    alert("myP2")
},
true)
document.getElementById("myDiv2").addEventListener("click",
function(){
    alert("myDiv2")
},
true)
