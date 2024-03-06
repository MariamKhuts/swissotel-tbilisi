// burger



let navigationElement=document.getElementById ('navBar');
let burgerElement=document.getElementById ('burgerBar');


   burgerElement.addEventListener("click", function () {
    
   navigationElement.classList.toggle("activeNav"); 

     });


let buttonElement=document.getElementById ('donate-btn');

buttonElement.addEventListener("click" ,function () {

  alert ("Donation is not available in your region :(")
} )