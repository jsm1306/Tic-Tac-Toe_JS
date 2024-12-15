let resetbtn = document.getElementById('reset');
let boxes = document.querySelectorAll('.dabba')
let turnO =true;
let newgamebtn = document.getElementById('NewGame');
let msgcontainer = document.querySelector('.result');
let message = document.getElementById('msg');
let count = 0;
let win_pattern =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
const resetgame=()=>{
    turnO = true;
    count = 0;
    enaabledBoxes()
    msgcontainer.classList.add("hide");
    
}
const disabledBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}
const enaabledBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = '';
    })
}
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
  };
const showWinner = (winner)=>{
    message.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = ()=>{
    for(let pattern of win_pattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != '' && val2 != '' && val3 != ''){
        if(val1==val2 && val2 == val3 ){
            console.log(`${val1} wins`);
            showWinner(val1);
        }
    }
}
}
resetbtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML = '';
    })
}
)
boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        let boxClicked = e.target;
        if(turnO){
            boxClicked.innerHTML = 'O';
            turnO = false;
        }else{
            boxClicked.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;  
        count++;
        let iswin =checkWinner();
        if (count === 9 && !iswin) {
            gameDraw();
          }
    })
})
newgamebtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);