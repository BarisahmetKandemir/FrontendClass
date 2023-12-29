// Fetch Apı

function fetchResponse(){
    fetch("ajax.txt")
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(err => console.log(err))
}
fetchResponse();

function getJsonFile(){
    fetch("ajax.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
getJsonFile();
wdssssssss

// Get request (veri alma)

// class Request {
//     get(url){
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     }
// }
// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums")

class Request2 {
    get(url){
        return new Promise((resolve,reject) => 
        {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
const request2 = new Request2();
let albums;
request2.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums)
})
.catch(err => console.log(err))



class Request3 {
    async get(url){
        const response = await fetch(url)
        const data = response.json()
        return data
    }
}
const request = new Request3()
let albums2;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums)
})



// Post request (veri yollama)
class Request4 {
    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    "Content-type":"application/json;charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
const request4 =new Request4();
request4.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err))


class Request {
    async post(url,data){
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        const responseData = await response.json()
        return responseData;
    }
}
const request5 = new Request()
request5.post("https://jsonplaceholder.typicode.com/albums",{userId:2,name:"Barış"})
.then(dataResponse => console.log(dataResponse))
.catch(err => console.log(err))

// PUT REQUEST (mevcüt olan iççeriği güncelleme)
class Request5{
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"PATCH",
                body:JSON.stringify(data),
                headers:{               "Content-type":"application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
const request6 = new Request5();
request6.put("https://jsonplaceholder.typicode.com/albums/1",{userId:8,name:"Thriller"})
.then(albume => console.log(albume))
.catch(err => console.log(err))

class Request6 {
    async put(url,data){
        const response = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json; charset=UTF-8"}
        })
        const responseData = await response.json()
        return responseData
    }
}
const request7 = new Request();
request6.put("https://jsonplaceholder.typicode.com/albums/1",{userId:5,name:"Thriller"})
.then(album=>console.log(album))
.catch(err=>console.log(err))


// DELETE

class Request{
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"DELETE"
            })
            .then(() => resolve("Veri silme işlemi başarılı"))
            .catch(err => reject(err))
        })
    }
}
const request8 = new Request();
request8.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err))

// Ödev delete request async olarak yap.




