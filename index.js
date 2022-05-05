//-- effet du boton2--//
var bouton = document.querySelector('.button2')
function hover(){
    bouton.style.color="var(--primary-ad-color)"
    bouton.style.backgroundColor="var(--white-ad-color)"
    bouton.style.boxShadow="8px 8px 8px grey"
    
}
   bouton.addEventListener('mouseover',hover)
   bouton.addEventListener('mouseout',unhoverout)

function unhoverout(){
   bouton.style.backgroundColor = "";
   bouton.style.color ="var(--white-ad-color)";
   bouton.style.boxShadow="0 0 0" 
     
} 
//-- effet du bouton1--//
var css = document.querySelector('.button1');
css.addEventListener('mouseover',myWhite)
function myWhite (){
   css.style.color="var(--white-ad-color)";
   css.style.backgroundColor= "var(--primary-ad-color)";
   css.style.boxShadow="8px 8px 8px white" ;
   css.fontWeigth="800px";
}
   

css.addEventListener('mouseout',myunWhite);
function myunWhite(){
    css.style.backgroundColor = "var(--white-ad-color)";
    css.style.color ="var(--primary-ad-color)";
    css.style.boxShadow="0 0 0";
    css.fontWeigth="800px"; 
}
//--effet des dernières boutons--//
var css = document.querySelectorAll('.button1');
for ( let i = 0; i< css.length; i++){
css[i].addEventListener('mouseover',myWhite)
function myWhite (){
    css[i].style.color="var(--white-ad-color)";
    css[i].style.backgroundColor= "var(--primary-ad-color)";
    css[i].style.boxShadow="8px 8px 10px white" ;
    css[i].fontWeigth="bold";
 }
 css[i].addEventListener('mouseout',myunWhite);
function myunWhite(){
    css[i].style.backgroundColor = "var(--white-ad-color)";
    css[i].style.color ="var(--primary-ad-color)";
    css[i].style.boxShadow="none";
    css[i].fontWeigth="800px";
}
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
//-- zoomer sur les spiderman--//
let spiderman = document.getElementsByClassName('.card-img-top');
for(let i = 0; i< spiderman.length;i++){
let image = spiderman[i];
image.addEventListener("mouseover", function(){
      image.style.trasform = 'scale(1.1)'
});
image.addEventListener("mouseout", function(){
      image.style.trasform = 'scale(1)'
      });
}
//--
var imput = document.querySelectorAll('.form-button');
for (let i = 0; i< imput.length; i++){
imput[i].addEventListener('mouseover',myhow)
function myhow (){
   imput[i].style.color="var(--white-ad-color)";
   imput[i].style.backgroundColor= "var(--primary-ad-color)";
   imput[i].style.boxShadow="8px 8px 10px white" ;
   imput[i].fontWeigth="bold";
 }
 imput[i].addEventListener('mouseout',myunhow)
function myunhow(){
   imput[i].style.backgroundColor = "";
   imput[i].style.color ="var(--primary-ad-color)";
   imput[i].style.boxShadow="none";
   imput[i].fontWeigth="100px";
}
}