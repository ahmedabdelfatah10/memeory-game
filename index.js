document.addEventListener('DOMContentLoaded',()=>{


const cardArray=[
    
    {
        name:"chessburger",
        img:"images/cheeseburger.png"


    },
     
    {
        name:"chessburger",
        img:"images/cheeseburger.png"


    }
    ,{
        name:"fries",
        img:"images/fries.png"
    },{
        name:"fries",
        img:"images/fries.png"
    },
    {
        name:"hotdog",
        img:"images/hotdog.png"
    }, {
        name:"hotdog",
        img:"images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"images/ice-cream.png"
    },{
    name:"ice-cream",
    img:"images/ice-cream.png"
},
    {
        name:"milkshake",
        img:"images/milkshake.png"
    },
    {
        name:"milkshake",
        img:"images/milkshake.png"
    },
    
    
    {
        name:"pizza",
        img:"images/pizza.png"
    },  
    {
        name:"pizza",
        img:"images/pizza.png"
    },
   



]
cardArray.sort(()=>.5-Math.random());
const grid=document.querySelector('.grid');
const resultDisplay=document.querySelector('.ahmed');

var cardsChosen=[];
var cardChosenId=[];
const cardsWon=[];
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        var card=document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);

    }
}
function checkForMATCH(){
 var cards=document.querySelectorAll('img');
 const optionID1=cardChosenId[0];
 const optionId2=cardChosenId[1];
 if(cardsChosen[0]===cardsChosen[1]){
     alert('you have selected a match');
     cards[optionID1].setAttribute('src','images/white.png');
     cards[optionId2].setAttribute('src','images/white.png');
    cardsWon.push(cardsChosen);
    
 }else{
     cards[optionID1].setAttribute('src','images/blank.png');
     cards[optionId2].setAttribute('src','images/blank.png');
     alert('sorry try again');
 }
 cardsChosen=[];
 cardChosenId=[];
 console.log(cardsWon);
 resultDisplay.textContent=cardsWon.length;
 if(cardsWon.length===cardArray.length/2){
     resultDisplay.textContent='congratulation';

 }
}

function flipCard(){
var cardId =this.getAttribute('data-id');
cardsChosen.push(cardArray[cardId].name);

cardChosenId.push(cardId);
this.setAttribute('src',cardArray[cardId].img);
if(cardsChosen.length===2){
setTimeout(checkForMATCH,500);
}
}

createBoard();

})