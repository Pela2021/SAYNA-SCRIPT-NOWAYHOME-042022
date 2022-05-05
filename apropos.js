//-- surligne dans l'header--//
let liste= document.querySelectorAll('ul li a')
for(let i=0; i< liste.length;i++){
   let li=liste[i]
   li.addEventListener('mouseover', function (){
      li.style.textDecoration='line-through';
   });
   li.addEventListener('mouseout', function (){
      li.style.textDecoration='none';
   });
}
//-- effet dans le footer--//
var icones = document.querySelectorAll('.footer-icones');
for ( let i = 0; i< icones.length; i++){
icones[i].addEventListener('mouseover',img);
function img(){
   icones[i].style.color="var(--white-ad-color)";
}

 icones[i].addEventListener('mouseout',unimage);
function unimage(){
  icones[i].style.color ="";
  
 } 
}