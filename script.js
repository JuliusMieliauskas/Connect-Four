let cnt = [0, 0, 0, 0, 0, 0, 0];

let table = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

let btn1 = document.querySelector('.button--1');
let btn2 = document.querySelector('.button--2');
let btn3 = document.querySelector('.button--3');
let btn4 = document.querySelector('.button--4');
let btn5 = document.querySelector('.button--5');
let btn6 = document.querySelector('.button--6');
let btn7 = document.querySelector('.button--7');

let playerTurn = 1;

const pr = () => {
  console.log(table);
}

const checkRight = (i, j) => {
  if(j > 3) return false;
  return (table[i][j] == table[i][j+1] && table[i][j] == table[i][j+2] && table[i][j] == table[i][j+3] && table[i][j] != 0);
}

const checkUp = (i, j) => {
  if(i < 3) return false;
  return (table[i][j] == table[i-1][j] && table[i][j] == table[i-2][j] && table[i][j] == table[i-3][j] && table[i][j] != 0);
}

const checkDiagonalLeft = (i, j) => {
  if(i < 3 || j < 3) return false;
  return (table[i][j] == table[i-1][j-1] && table[i][j] == table[i-2][j-2] && table[i][j] == table[i-3][j-3] && table[i][j] != 0);
}

const checkDiagonalRight = (i, j) => {
  if(i < 3 || j > 4) return false;
  return (table[i][j] == table[i-1][j+1] && table[i][j] == table[i-2][j+2] && table[i][j] == table[i-3][j+3] && table[i][j] != 0);
}

const check = (i, j) => {
  return checkUp(i, j) || checkRight(i, j) || checkDiagonalLeft(i, j) || checkDiagonalRight(i, j);
}

const checkTable = () => {
  for(let i = 0; i<7; i++) {
    for(let j = 0; j<7; j++) {
      console.log("Checking with: ", i, j);
       if(check(i, j)) {
         document.getElementsByClassName('popup')[0].textContent = (playerTurn) ? "Winner is black" : "Winner is red";
         return true;
       }
    }
  }
}

//Button 1
btn1.addEventListener('click', function () {
  cnt[0]++;
  let rowNum = 7 - cnt[0] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--1`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][0] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[0] == 7) {
    btn1.style.pointerEvents = 'none';
    btn1.style.backgroundColor = '#303030';
  }
});

//Button 2
btn2.addEventListener('click', function () {
  cnt[1]++;
  let rowNum = 7 - cnt[1] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--2`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][1] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[1] == 7) {
    btn2.style.pointerEvents = 'none';
    btn2.style.backgroundColor = '#303030';
  }
});

//Button 3
btn3.addEventListener('click', function () {
  cnt[2]++;
  let rowNum = 7 - cnt[2] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--3`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][2] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[2] == 7) {
    btn3.style.pointerEvents = 'none';
    btn3.style.backgroundColor = '#303030';
  }
});

//Button 4
btn4.addEventListener('click', function () {
  cnt[3]++;
  let rowNum = 7 - cnt[3] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--4`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][3] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[3] == 7) {
    btn4.style.pointerEvents = 'none';
    btn4.style.backgroundColor = '#303030';
  }
});

//Button 5
btn5.addEventListener('click', function () {
  cnt[4]++;
  let rowNum = 7 - cnt[4] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--5`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][4] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[4] == 7) {
    btn5.style.pointerEvents = 'none';
    btn5.style.backgroundColor = '#303030';
  }
});

//Button 6
btn6.addEventListener('click', function () {
  cnt[5]++;
  let rowNum = 7 - cnt[5] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--6`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][5] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[5] == 7) {
    btn6.style.pointerEvents = 'none';
    btn6.style.backgroundColor = '#303030';
  }
});

//Button 7
btn7.addEventListener('click', function () {
  cnt[6]++;
  let rowNum = 7 - cnt[6] + 1;
  document.getElementsByClassName(`row--${rowNum} collumn--7`)[0].style.backgroundColor = (playerTurn) ? 'black' : 'red';
  playerTurn = !playerTurn;
  table[rowNum-1][6] = playerTurn+1;
  if(checkTable()) console.log("Winner");
  if(cnt[6] == 7) {
    btn7.style.pointerEvents = 'none';
    btn7.style.backgroundColor = '#303030';
  }
});
