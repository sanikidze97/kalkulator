let place =document.getElementById('place')
let btn=document.querySelectorAll('.btn')
let del =document.querySelector('.delete')


for(let i =0;  i<btn.length;  i++){
    btn[i].addEventListener("click", function(){
    place.innerHTML=btn[i].textContent
    if(place.innerHTML>0 ){

      let sum =  place.innerHTML=btn[i].textContent 

      
    }
   
})


}


del.addEventListener('click',function(){

    place.innerHTML=""
})
