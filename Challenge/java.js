let symbol=document.getElementsByClassName('fa')[0];
let body=document.getElementsByTagName('body')[0];
symbol.addEventListener('click',function(){
body.classList.toggle('night_mode');
if(body.classList.contains('night_mode')){
symbol.className='fa fa-moon-o';
}else {
symbol.className='fa fa-sun-o';
}});
