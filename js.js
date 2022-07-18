var btnsH = document.querySelectorAll('.fa-heart')
var btnsP = document.querySelectorAll('.plus')
var btnsM = document.querySelectorAll('.moin')
var sup = document.querySelectorAll('.boutton')




for(let i = 0; i<btnsP.length;i++){
    btnsP[i].addEventListener('click',function(){
        btnsP[i].previousElementSibling.innerText++
        calculSomme()
    })
 }

for (let i=0; i<btnsM.length;i++){
    btnsM[i].addEventListener('click',function(){
         if ( btnsM[i].nextElementSibling.innerText>0){
                  btnsM[i].nextElementSibling.innerText--
                  calculSomme()
         }
                  
            })
                
        }  
for (let i=0;i<sup.length;i++){
sup[i].addEventListener ('click', function(){
    sup[i].parentElement.parentElement. remove();
    calculSomme()

})}

for(let i = 0; i<btnsH.length;i++){
    btnsH[i].addEventListener('click',function(){
        btnsH[i].classList.toggle('heart')
    })
}

function calculSomme(){
    var priceS = document.querySelectorAll('.prix')
    var qteS = document.querySelectorAll('.qt')
    var sommeT = document.querySelector('#somme')
    var som = 0
    for(let i = 0; i < priceS.length;i++){
        som = som+ priceS[i].innerHTML * qteS[i].innerHTML
    }
    sommeT.innerHTML = som
}