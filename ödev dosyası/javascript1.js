// 1.ÖDEV
let rasgeleSayı = [0,1,2,3,4,5,6,7,8,9,10]
console.log(Math.trunc(Math.random(rasgeleSayı)*10))


// 2.ÖDEV
let people = ["Gray","Mary","Devon","James"]
console.log(people)
people.splice(1,0,"Elizabeth")
people.splice(3,2,"Artie","James")
console.log(people)


//3.ÖDEV
let text1 = "mustafa_selman@gmail.com";
let text2 = "mehmet_colak@hotmail.com";
let text3 = "yasin_sezer@yandex.com";

function emailismi(email) {
    // Email'i "@" işaretine göre ayır
    var emailParcalari = email.split('@');
    
    // İlk parçayı "_" işaretine göre ayır ve her kelimenin baş harfini büyük yap
    var isimParcalari = emailParcalari[0].split('_').map(function(kelime) {
      return kelime.charAt(0).toUpperCase() + kelime.slice(1);
    });
    
    // İsim ve soyismi birleştir
    var isim = isimParcalari.join(' ');
   
    return isim
  }
  
  console.log(emailismi(text1));  // Mustafa Selman
  console.log(emailismi(text2));  // Mehmet Colak
  console.log(emailismi(text3));  // Yasin Sezer
  
  


// 4.ÖDEV
let sayılar = [12,34,2,3,67,66,5,24]
// en küçük 2. değer
sayılar.sort(function(a,b){return a-b})
console.log(sayılar[1])

// en büyük 2. değer
sayılar.sort(function(a,b){return b-a})
console.log(sayılar[1])



