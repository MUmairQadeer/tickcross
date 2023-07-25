console.log("Wellcome to Tic Tac Toe")
// let music =new Audio("music.mp3")
let audioturn =new Audio("tap.mp3")
// let gameoveraudio =new Audio("music.mp3");
let turn ="X"
let gameover =false;
//function to change the turn
const changeturn =()=>{
    return turn === "X"?"0":"X"
}

//function to check win 
const checkwin =()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2    ,15,5,0],
        [3,4,5    ,15,15,0],
        [6,7,8     ,15,25,0],
        [0,4,8     ,20,15,45],
        [2,4,6     ,20,15,-45],
        [0,3,6      ,8,15,90],
        [1,4,7      ,18,15,90],
        [2,5,8       ,28,15,90],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="" )){
        document.querySelector('.info').innerText =boxtext[e[0]].innerText + " Won"
        gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px"
        document.querySelector('.line').style.width ="25vw";
        document.querySelector('.line').style.transform =`translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//main logic
// Music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn=changeturn();
            audioturn.play();
            checkwin();
            if(!gameover){
               document.getElementsByClassName(" info ")[0].innerText=" Turn for " + turn.toUpperCase();} 
            }
            

})
})
//ADD EVENTLISTENER TO RESET BUTTON
reset.addEventListener('click', ()=>{
    let boxtexts =document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
    })
turn="X"
gameover=false
document.querySelector('.line').style.width ="0vw";
if(!gameover){
    document.getElementsByClassName(" info ")[0].innerText=" Turn for " + turn.toUpperCase();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
 }

})


