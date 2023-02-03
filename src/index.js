import './index.css';

const defaultUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameUrl = `${defaultUrl}/games/C2JtbqkIjKaSHImZ3Hwd/scores`;

const getGame = async () => {
  const request = await fetch(gameUrl);
  const response = await request.json();
  return response.result;
};

const postGame = async (name, score) => {
  const game = {
    user: name,
    score,
  };
  const request = await fetch(gameUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
  });
  const response = await request.json();
  return response.result;
};

const showGame = (game) => {
  const gameForm = document.querySelector('.form-left-div-content');
  gameForm.innerHTML += `
      <span class="form-span">
        <p id="name">${game.user}</p>
        :&nbsp;
        <p id="score">${game.score}</p>
      </span>
      `;
};

const refreshGame = async () => {
  const gameForm = document.querySelector('.form-left-div-content');
  gameForm.innerHTML = '';
  const games = await getGame();
  games.forEach((game) => {
    showGame(game);
  });
};

const refreshButtonEventHandler = (e) => {
  e.preventDefault();
  refreshGame();
};

const submitButtonEventHandler = async (e) => {
  e.preventDefault();
  refreshGame();
  const form = document.querySelector('#form-right');
  const inputName = document.querySelector('#input-name');
  const newName = inputName.value;
  const inputScore = document.querySelector('#input-score');
  const newScore = inputScore.value;
  await postGame(newName, newScore);
  form.reset();
};

const refreshButton = document.getElementById('refresh');
const submitButton = document.getElementById('form-right');

refreshButton.addEventListener('click', refreshButtonEventHandler);
submitButton.addEventListener('submit', submitButtonEventHandler);

window.onload = () => {
  refreshGame();
};
