import './index.css';
import { clearFields, refreshGame } from './modules/userInterface.js';
import { postGame } from './modules/api.js';

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  refreshGame();
});

const submitButton = document.getElementById('form-right');
submitButton.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputName = document.querySelector('#input-name');
  const newName = inputName.value;
  const inputScore = document.querySelector('#input-score');
  const newScore = inputScore.value;
  await postGame(newName, newScore);
  refreshGame();
  clearFields();
});

window.onload = () => {
  refreshGame();
};
