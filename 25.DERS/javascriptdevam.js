// try-cat-finaly hat yönetim araçları
try {
    console.log("mesaj içeriği sağlıklı")
}
catch(err){
   console.log(err.message)
}

let x = "  ";
try {
    if(x.trim() == "") throw "empty"
}
catch(error){
    console.log(error.message)
}
finally {
    console.log("try catch içeriği sonlandı ")
}

let y = "7"
try {
    y = Number(y);
    if(y<5) throw "sayı çok küçük"
    if(y>10) throw "sayı çok büyük"
    console.log(y)
}
catch (err){
    console.log(err)
}
finally {
    console.log("kod bloğu çalıştı")
}


// this kullanımı
















