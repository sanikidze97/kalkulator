let place =document.getElementById('place');
let btn7=document.querySelector('.btn7');
let btn0=document.querySelector('.btn0');
let btn8 =document.querySelector('.btn8');
let btn9 =document.querySelector('.btn9');
let btn6 =document.querySelector('.btn6');
let btn5 =document.querySelector('.btn5');
let btn4 =document.querySelector('.btn4');
let btn3 =document.querySelector('.btn3');
let btn2 =document.querySelector('.btn2');
let btn1 =document.querySelector('.btn1');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let gamra = document.querySelector('.gamra')
let gayo = document.querySelector('.gayo')
let toloba=document.querySelector('.redbut')





let del =document.querySelector('.delete')


btn7.addEventListener('click',function(){

    place.textContent +='7'

})
btn9.addEventListener('click',function(){

  place.textContent +='9'

})
btn6.addEventListener('click',function(){

  place.textContent +='6'

})
btn5.addEventListener('click',function(){

  place.textContent +='5'

})
btn4.addEventListener('click',function(){

  place.textContent +='4'

})

btn0.addEventListener('click',function(){

  place.textContent +='0'

})
btn3.addEventListener('click',function(){

  place.textContent +='3'

})

btn2.addEventListener('click',function(){

  place.textContent +='2'

})
btn1.addEventListener('click',function(){

  place.textContent +='1'

})

btn8.addEventListener('click',function(){

  place.textContent +='8'

})
plus.addEventListener('click',function(){

  place.textContent +='+'

})

minus.addEventListener('click',function(){

  place.textContent +='-'

})

gamra.addEventListener('click',function(){

  place.textContent +='*'

})

gayo.addEventListener('click',function(){

  place.textContent +='/'

})




del.addEventListener('click',function(){

  place.textContent=''

})


toloba.addEventListener('click', function(){

     if (place.textContent  ='+' ){


             place.textContent="number + number ;)"

     }









})







