let header = document.querySelector("header")
let images = ["panama-ge84c956b4_1280.jpg",
"pont-du-gard-gaae7a54b9_1280.jpg",
"sea-g6a015ab98_1280.jpg",
"photo-1454942901704-3c44c11b2ad1.jpg"]
let add = 0

const giverandom = ()=>{
     add = add+1
     if(add>images.length-1){
        add=0
     }
     console.log(header);
header.style.background=`linear-gradient(rgba(0, 0, 0, 0.21),rgba(0, 0, 0, 0.215)),url(${images[add]})` 
header.style.backgroundPosition= "center";
header.style.backgroundSize = "cover";


 }
giverandom()
setInterval(()=>{
    giverandom()

},4000)