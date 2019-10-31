const candyDisplay = document.querySelector('.candies');
const candyBtn = document.querySelector('.create-candies');
const loliyDisplay = document.querySelector('.lollypops');
const loliyBtn = document.querySelector('.buy-lollypops');
const speedDisplay = document.querySelector('.speed');
const speedBtn = document.querySelector('.candy-machine');
let candyCount = 0, loliyCount = countLoliyPop(), speed = 1.0;
let numPerSec = 1;

function countLoliyPop() {
  return loliyDisplay.textContent.toString().match(new RegExp("🍭", "g")).length;
}

function addImage(col, num) {
  let image;
  if(col === 0) {
    image = '🍬';
    if(candyDisplay.textContent === `0`) {
      candyDisplay.textContent = '';
    }
  }
  if(col === 1) {
    image = '🍭';
  }
  return [...Array(num)].map(() => image ).join('');
}

function buyLoliyPop() {
  if(candyCount>100) {
    loliyCount += 1;
    candyCount -= 100;
    candyDisplay.textContent = addImage(0, candyCount);
    loliyDisplay.textContent = addImage(1, loliyCount);
  }
}

candyBtn.addEventListener('click', (event)=> {
  candyCount ++;
  if(candyDisplay.textContent === `0`) {
    candyDisplay.textContent = '🍬';
  } else {
    candyDisplay.textContent += '🍬';
  }  
})

loliyBtn.addEventListener('click', buyLoliyPop);
speedBtn.addEventListener('click', function(){
  speed = speed * 10;
})

countSec = 0;
let timer = setInterval(() => {
  numPerSec = (Math.floor(parseInt(loliyCount)/ 10))*speed;
  console.log(`sec ${countSec}`);
  if(candyDisplay.textContent === `0`) {
    candyDisplay.textContent = '';
  }
  candyDisplay.textContent += addImage(0, numPerSec);
  candyCount += numPerSec;
  countSec++;
  console.log(`candy count ${candyCount}`);
  speedDisplay.textContent = numPerSec;
  if(candyCount >= 10000) {
    clearInterval(timer);
    alert('You win!');
  }
},1000);

