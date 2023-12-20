const myDate = new Date()
// DATE OBJECT (TARİHLER)
console.log(myDate)
// yılı gösterir
console.log(myDate.getFullYear())
// ayı gösterir
console.log(myDate.getMonth()) 
//ayın içinde günü gösterir
console.log(myDate.getDate())
// saat
console.log(myDate.getHours())
// dk
console.log(myDate.getMinutes())
// saniye
console.log(myDate.getSeconds())


// MATH OBJECT(MATEMATİKSEL İŞLEMLER)
console.log(Math.round(4.6))//en yakın değere yuvarlar
console.log(Math.ceil(4.3))//büyük sayıya yuvarlar
console.log(Math.floor(4.9))// küçük sayıya yuvarlar
console.log(Math.trunc(4.6))//Tam sayı kısmı
console.log(Math.pow(8,2))//karesini alma
console.log(Math.sqrt(64))//Kök alma
console.log(Math.min(0,34,98,136))//minumum alır 
console.log((Math.random()*100).toFixed(0))
console.log(Math.trunc(Math.random()*100))


// COMPARİSON(KARŞILAŞTIRMA)
let x = 8 ;
let y = 20 ;
console.log("8" == x)//type hassasiyeti yokur str=number olabilir
console.log("8" === x)//type hassasiyeti vardır
console.log("8" != x)//! işlemi eşit değildir yapar
console.log(typeof !x)

// x>8 x<8 x<=8 x>=8
console.log(x <= 8)

// and && or ||
// true && true (ikiside true olursa true yoksa false)
// true || true ( ikisinden biri true olursa true yoksa false)
console.log(x<10 && y>11)

//CONDİTİONAL (TERNARY) OPERATÖR
// (koşul) ? (doğru ise gerçekleşecek alan) : (yanlış ise gerçekleşecek alan)
let yas = 12 ; 
let oyVerme = (yas<18) ? "Çok genç oy veremez" : "Oy verebilir"
console.log(oyVerme)

let name1 = "Mustafa" ;
let name2 = "" ;
let name3 = null ;
let name4 = 0 ;
let name5 = NaN ;
let text = "bu gösterilen text metnidir"
//eğer solda bir değer varsa o yazılır yoksa sağdaki yazılır
console.log(name1 || text)
console.log(name2 || text)
console.log(name3 || text)
console.log(name4 || text)
console.log(name5 || text)
console.log("------------------------")
// eğer solda bir değer varsa sağdaki yazılır yoksa soldaki yazılır(&&)
console.log(name1 && text)
console.log(name2 && text)
console.log(name3 && text)
console.log(name4 && text)
console.log(name5 && text)

// CONDİTİONAL STATEMENT(KOŞULLU İFADELER)
// if,else,else if,switch

// İf
let hour = 9 ;
if (hour < 18) {
    console.log("İyi günler")
}
if (hour > 18) {
    console.log("İyi geceler")
}

// Else
let hour2 = 19 ;
if(hour2 < 18){
    console.log("İyi günler")
}
else{
    console.log("İyi geceler")
}

// Else İf
let hour3 = 0 ;
if (hour3 < 10){
    console.log("İyi sabahlar")
}
else if(hour3 < 18){
    console.log("İyi günler")
}
else if(hour3 <22){
    console.log("İyi akşamlar")
}
else{
    console.log("İyi geceler")
}

// SWİTCH ÇOKLU GİRDİLERİ TEMSİL EDER
let day;
switch(Number(2)){
    case 0 :
        day = "Pazar" ;
        break;
    case 1:
        day = "Pazartesi"
        break;
    case 2:
        day = "Salı"
        break;
    case 3:
        day = "Çarşamba"
        break;
    case 4:
        day = "Perşembe"
        break;
    case 5:
        day = "Cuma"
        break;
    case 6:
        day = "Cumartesi"
        break;
    default:
        day = "hatalı veri"
}
console.log(day)


// LOOP (DÖNGÜ)
// for, for/in, for/of, while, do/while

// For(code çalışmadan girilecek alan/tanımlama alanı;koşul durumu;her döngüden sonra çalışacak alanı verir)
for (let i = 0; i < 5; i++){
    console.log("Döngü çalışıyor")
    console.log(`i değeri ${i}`)
}

let = "";
for (let i = 0; i < 5; i++){
     text += "The Number is" + i + "\n"
}
console.log(text)

// For döngüsünde ilk  kısım opsiyoneldir
let j = 0;
for(let k,l,m;j<5;j++){
// coding
j++
}

const arr = [1,2,3,4,5,6]
for (let l = 0,r = arr.length - 1; l<r; l++,r--){
    console.log(arr[l],arr[r])
}




