    // STRİNG
// escape character "\"

let text="Ahmet bana \"naber\" dedi"
console.log(text)

let text2 = "tab boşluğu bırakmak için \t kullanılır.Teni satıra geçmek için \n kullanılır"
console.log(text2)

// string methods

let text3 = "abcdefgh"
let length = text3.length
console.log(length)
let text4 = "\t"
console.log(text4.length)

//SLİCE,SUBSTRİNG,SUBSTR

// slice
let text5 = "apple, banana, kiwi"
let part = text5.slice(2,10)
console.log(part)
console.log(text5.slice(7))
console.log(text5.slice(-5))
// ilk eleman 0 dır.
// son eleman sayılmaz ama ilk eleman sayılır.
// eksi rakam verirsek geriden başlar.


//substr
let text6 = "Bmw, Mercedes, Audi"
console.log(text6.substr(2,10)) 
// son karakteride alır yazılan tüm karakterleri alır

// substring
let text7 = "Bmw, Mercedes, Audi"


// Kelimeleri değiştirme
let text8 = "Seni seviyorum seviyorum"
let newText = text8.replace("seviyorum","sevmiyorum") 
console.log(newText)
console.log(text8.replace(/SEVIYORUM/i,"sevmiyorum"))
console.log(text8.replace(/SEVIYORUM/gi,"sevmiyorum"))
console.log(text8.replace(/seviyorum/g,"sevmiyorum"))
console.log(text8.replace("seviyorum","sevmiyorum"))
// (i) büyük küçük harf harf fark etmez.
// (g)(global) bütün hepsini değiştirir.
// (gi)büyük küçük fark etmez ve bütün harfleri değiştirir.


// Harfleri büyütme küçültme
let text9 = "Hello World!"
console.log(text9.toUpperCase())
console.log(text9.toLowerCase())

// Metinleri birleşirme
let text10 = "Hello turkey "
let text11 = "Hello Sun"
console.log(text10 + text11)
console.log(text10.concat(" ", text11 , "metnin devamı"))

// Cümlelerin başında ve sonundaki boşlukları silme
let text12 = "            Hello World!      "
console.log(text12)
console.log(text12.trimStart())
console.log(text12.trimEnd())
console.log(text12.trim())

// Al satıra geçsen bile etki etmez
text13 = `barış
ahmet
mercedes
`
console.log(text13)
// alt car ve i nin yanına 2 kere basında olur

// başına ve sonunda istediğimiz şeyi koymak
let text14 = "567"
console.log(text14.padStart(9,"0"))
console.log(text14.padEnd(9,"a"))

// ders sorusu
let text15 = "123"
let padStart = text15.padStart(5,"0")
console.log(padStart + "111")

// Kelimeden istediğimiz harfi seçme
let text16 = "Hello World"
console.log(text16.charAt(0)) 
console.log(text16[0])


//  kelimeleri tek tek farklı küme yapmayı sağlar
let text17 = "elma,şeftali,üzüm"
console.log(text17.split(","))
let text19 = "elma"
console.log(text19.split(""))


// kelimelerin yerini bulma
let text20 = "Please locate where 'locate' occurs!"
console.log(text20.indexOf("locate"))
console.log(text20.lastIndexOf("locate"))
// bulduğu içeriğin index değerini,bulamadıysa -1 döndürür.
let text21 = "hello world and akhvqkjenjnkqfkjnf"
console.log(text.includes("world"))
// inclides kelmie varsa true yoksa false döndürür
console.log(text.startsWith("hello"))
console.log(text.endsWith("hello"))
// start ve end eğer  başlangıç ve son kelmilerei girersek true dönndürür


// ödev
let text18 = "Hello World"
let sonHarf = text18[text18.length - 1];
console.log(sonHarf);



