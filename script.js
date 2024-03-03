// burger

let navlistElement = document.getElementById ('navbar');
let burgerElement =document.getElementById ('burgerbar');



burgerElement.addEventListener ('click',function() { 
 navlistElement.classlist.toggle('activenav'); } )