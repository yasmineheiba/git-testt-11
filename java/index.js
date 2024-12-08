


let name=document.getElementById("name").value
let email=document.getElementById("emailid").value;
let password=document.getElementById("passwordid").value;
let home=document.getElementById("home").value;
var cartona;
if(localStorage.getItem("cartona")) {
  cartona=JSON.parse(localStorage.getItem("cartona"))
  
   }
  else{
    cartona=[]
    

    }
 





document.querySelector("#signup").addEventListener("click",function(){
  console.log("hi")
  document.querySelector(".popon").classList.remove("d-none")
  cartona.push(cartona)
  console.log(cartona)
  
  
  savetolocalstorage()
  
});
function savetolocalstorage(){
  localStorage.setItem("cartona",JSON.stringify(cartona))

}
var content;
 document.querySelector("#addbtn").addEventListener("click",function(){
   console.log("hiu")
  // document.querySelector(".popon").classList.add("d-none")
document.querySelector(".navbar").classList.remove("d-none")
document.querySelector(".wellcome").classList.remove("d-none")
document.querySelector(".pop").classList.add("d-none")
content=` <p class="text-info text-center">Welcome.name</p>`
  cartona.push(content)
  console.log("hii")
 
 
});
document.querySelector("#logg").addEventListener("click",function(){
  console.log("hi")
  document.querySelector(".popon").classList.add("d-none")
  document.querySelector(".pop").classList.remove("d-none")
  document.querySelector(".navbar").classList.add("d-none")
document.querySelector(".wellcome").classList.add("d-none")
 document.getElementById("emailid").value=null;
 document.getElementById("passwordid").value=null;
  
});