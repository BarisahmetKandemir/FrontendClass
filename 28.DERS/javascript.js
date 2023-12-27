// let myTitle = document.getElementById("head").innerHTML;
// console.log(myTitle);

// let myTitle2 = document.getElementById("head").firstChild.nodeValue;
// console.log(myTitle2);

// Body ve head içlerini gösterir
console.log(document.head.innerHTML)
console.log(document.body.innerHTML)
console.log(document.documentElement.innerHTML)
// Elementin ne olduğunu gösterir
console.log(document.getElementById("head").nodeName)
console.log("-------------------")



// CREATE NODES(çine koyduğumuz elementin en sonuna oluşturur)

// Hangi element olacağı
const para = document.createElement("p")
// Ne yazacağı
const node = document.createTextNode("This is new")
para.appendChild(node)
const element = document.getElementById("div1")
element.appendChild(para)
console.log(document.body.innerHTML)
// Elemanın değerlerini değişirme
para.innerHTML = "New item changed"
para.setAttribute("id","p4")

// İstiedğimiz yere yerleştirme
const child = document.getElementById("p1")
element.insertBefore(para,child)

// Başak bir elementin yerine yerleştirme
const child2 = document.getElementById("p2")
element.replaceChild(para,child2)

console.log(document.body.innerHTML)
// 3 İÇERİK APPENDCHİLD İLE SONA YERLEŞTİRME,İNSERTBEFOREİLE İSTEDİĞİMİZ YERE YERLEŞTİRME,RAPLACECHİLD İLE BAŞKASININ YERİNE YERLEŞTİRME
console.log("-----------------------")



// NODELİST
// hepsini gösterme
const myNodeList = document.querySelectorAll("p")
console.log(myNodeList[0])
// ID sine göre seçip gösterme
const myNodeList2 = document.querySelector("#p1")
console.log(myNodeList2)
console.log("-----------------------")



// SİBLİNG(kardeşlik)
// const myNode = document.querySelector("#p2")
// const next = myNode.nextElementSibling.innerHTML 
// console.log(next)
// const parent = myNode.parentNode.innerHTML 
// console.log(parent)
// TEKRAR ET
console.log("-----------------------")



// STORAGE_API

// localStorage
localStorage.setItem("name","Mustafa Selman Önal")
const item = localStorage.getItem("name")
console.log(item)
// problem 1 localstorage string kaydı yapar
// problem 2 üzerine yazar eski elemanı siler

const name = ["Ahmet","Mustafa"]
localStorage.setItem("name",JSON.stringify(name))
const item2 = JSON.parse(localStorage.getItem("name"))
console.log(item2)

// Eleman ekleme
const name1 = ["Barış","Mustafa"]
localStorage.setItem("name",JSON.stringify(name1))
const item3 = JSON.parse(localStorage.getItem("name"))
console.log(item3)
const name2 = [...JSON.parse(localStorage.getItem("name")),"Mahmut","Ayşe"]
localStorage.setItem("name",JSON.stringify(name2))
console.log(JSON.parse(localStorage.getItem("name")))
// Bütün elemanları siler
localStorage.removeItem("name")

// sessionStorage(Aynısının sadece sessionStorage yazılmış hali)
console.log("----------------------")



// AJAX(Asynchronous Javascript And XML)

const xhttp = new XMLHttpRequest()
xhttp.onload = function(){
    // yüklendiğinde yapılması gereken söylenir
    document.getElementById("demo5").
    innerHTML = this.responseText
    console.log(JSON.parse(this.responseText))
}
xhttp.open("GET","ajax.JSON")
xhttp.send()


