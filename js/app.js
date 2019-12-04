
 const cards=document.getElementsByClassName('card');//the 16 cards in initial state
 let moves=0;//total no. of movments
 let openCards;//the cards that cruntly opened but not matched yet
 let cardsName1=["fa fa-diamond",
"fa fa-paper-plane-o",
"fa fa-anchor",
"fa fa-bolt",
"fa fa-cube",
"fa fa-leaf",
"fa fa-bicycle",
"fa fa-bomb"];//name of classes that reperesent the symbol in each card
let cardsName=cardsName1.concat(cardsName1);
let shuffledCardsName;//name of classes that reperesent the symbol in each card in random
let timer=0;
let stars=0;
let totalStars=0; //represent the total no of stars was gained



//assign the shuffled cards
setCards();


//add the event to all the cards
 for(let i=0;i<cards.length;i++){
  cards[i].addEventListener('click',clicked,Event);}//end of for loop


// event that will accure when player click card
function clicked(Event){
 if(Event.target.classList.contains('show')||Event.target.nodeName==='I'){
    //No event happens when the card allready open
    }else{
     moves+=1;
     score(moves);
    Event.target.className='card open show';
    rotateFunc(Event.target,true);
  if(moves %2===0){//only compare when there are two opened cards
    openCards=document.getElementsByClassName('open');
    rotateFunc(openCards[0],false);
    rotateFunc(openCards[1],false);
     setTimeout(matched,700,openCards);

  }//end of else
 }//end of if
}//end of function


//to check if the cards matched
function matched(openCards){
   if(openCards[0].getElementsByTagName('I')[0].className===openCards[1].getElementsByTagName('I')[0].className){
       for(let i=0;i<2;i++){
      openCards[0].className='card show match';}//end for loop
      return true;}
   else{
     for(let i=0;i<2;++i){
     openCards[0].className='card';}//end for loop
     return false;
   }//end of else
 }//end of function


// the timer
setInterval(function(){
  if(!isFinished()){timer+=1000;}
  document.querySelector('.timer').textContent= timer/1000;},1000);


//add event to the restart button
document.querySelector('div.restart').addEventListener('click', restart);


//restart or replay the Game
function restart(){
  moves=0;
  score(moves);
  for(let i=0;i<cards.length;i++){
    cards[i].className='card';}
  setTimeout(setCards,1000);}


//function that specified weather the game finished
function isFinished(){
  if(document.querySelectorAll('.match').length===16){
    totalStars+=stars;
    return true;
  }
  else{
    return false;
  }
}//end of function


//set the cards in random and initial state
function setCards(){
  shuffledCardsName=shuffle(cardsName);
  for(let i=0;i<cards.length;i++){
   cards[i].querySelector("I").className=shuffledCardsName[i];
 }
}


//End of the game
setInterval(congralationMeassage,10);


//show message in the end of the game with total strs and time
function congralationMeassage(){
  if(isFinished()){
    if (confirm(`Congralation !!!\n you won the game in ${timer/1000} S and with ${moves} moves and ${stars} stars\n Do you want to play again ?\n press ok for countinue or cansel to exit`)) {
    restart();
  } else {
    alert( `Sad to see you leaving ): rounds Your total score is ${totalStars} stars`);
    close();
   }//end of else
 } //end of if
}//end of function



//calculate number of movment and the score then return it
function score(moves){
document.querySelector('.moves').textContent=moves;
 if(moves<24){
      document.querySelectorAll('.fa-star')[0].style.display='inline';
      document.querySelectorAll('.fa-star')[1].style.display='inline';
      stars=3;
 }else if (moves<40) {
   document.querySelectorAll('.fa-star')[0].style.display='none';
   stars=2;
 }else  {
     document.querySelectorAll('.fa-star')[1].style.display='none';
      stars=1;
 }
 return moves;
}

// take single card and rotate in 360 or -360
function rotateFunc(element,i){

    if(i){
          element.style.WebkitTransitionDuration="1s";
          element.style.webkitTransform ='rotate(360deg)';}
      else{
        element.style.WebkitTransitionDuration="1s";
        element.style.webkitTransform ='rotate(-360deg)';}
    }




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
