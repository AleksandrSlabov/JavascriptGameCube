


const score2 = document.querySelector('.score2');
const play2Score = document.querySelector('.spanScore2');
const player2 = document.querySelector('.player2 ');
const player1 = document.querySelector('.player1');
const play1Score = document.querySelector('.spanScore');
const score1 = document.querySelector('.score');
const img = document.querySelector('.img');

const btnNewGame = document.querySelector('.NewGame');
const btnStartGame = document.querySelector('.startCube');
const btnSaveGame = document.querySelector('.SaveCube');

let numberplayer1 = 0;
let numberplayer2 = 0;

let score1player = 0;
let score2player = 0;

let isPlay = true;


btnNewGame.addEventListener('click', function () {
  isPlay = true
  player1.classList.toggle('myGame');
  player2.classList.toggle('myGame');
  numberplayer1 = 0;
  numberplayer2 = 0;

  score1player = 0;
  score2player = 0;
  score1.textContent = score1player;
  score2.textContent = score2player;
  img.src = '/img/cube1.png';
  img.classList.remove('hidden');
});

btnStartGame.addEventListener('click', function () {
  if (isPlay ) {
    let random = Math.round(Math.random() * 5 + 1);
    console.log(random);
    img.classList.remove('hidden');
    img.src = `/img/dice${random}.png`;

    if (random === 1) {
      player1.classList.toggle('myGame');
      player2.classList.toggle('myGame');
      play1Score.textContent = 0;
      numberplayer1 = 0;
      play2Score.textContent = 0;
      numberplayer2 = 0;
    }

    if (random > 1) {
      if (player2.classList.contains('myGame')) {
        numberplayer2 = numberplayer2 + random;
        play2Score.textContent = numberplayer2;

        btnSaveGame.addEventListener('click', function () {
          score2player = score2player + numberplayer2;
          score2.textContent = score2player;
          player1.classList.add('myGame');
          player2.classList.remove('myGame');
          numberplayer2 = 0;
          play2Score.textContent = 0;

          if (score2player >= 100) {
            isPlay = false;
            player1.classList.remove('myGame');
            player2.classList.add('myGame');
            score2.textContent = 'Winner ';
            numberplayer1 = 0;
            numberplayer2 = 0;

            score1.textContent = 'Losser';
            img.classList.add('hidden');
          }
        });
      } else {
        play2Score.textContent = 0;
        numberplayer2 = 0;
      }

      if (player1.classList.contains('myGame')) {
        numberplayer1 = numberplayer1 + random;
        play1Score.textContent = numberplayer1;

        btnSaveGame.addEventListener('click', function () {
          score1player = score1player + numberplayer1;
          score1.textContent = score1player;
          player1.classList.remove('myGame');
          player2.classList.add('myGame');
          numberplayer1 = 0;
          play1Score.textContent = 0;

          if (score1player >= 100) {
            isPlay = false;
            player1.classList.add('myGame');
            player2.classList.remove('myGame');
            score1.textContent = 'Winner';
            numberplayer1 = 0;
            numberplayer2 = 0;
            score2.textContent = 'Losser';
            img.classList.add('hidden');

          
          } else {
            play1Score.textContent = 0;
            numberplayer1 = 0;
          }
        });
      }
    }}
  });
