import { getGame } from './api.js';

export const clearFields = () => {
  const form = document.querySelector('#form-right');
  form.reset();
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

export const refreshGame = async () => {
  const gameForm = document.querySelector('.form-left-div-content');
  gameForm.innerHTML = '';
  const games = await getGame();
  games.forEach((game) => {
    showGame(game);
  });
};
