import './index.css';
import LeaderBoard from './modules/leaderBoard.js';
import UserInterface from './modules/userInterface.js';
import LocalStorage from './modules/localStorage.js';

// DISPLAY SCORES AND NAMES
document.addEventListener('DOMContentLoaded', () => {
  UserInterface.showScore();
});

// ADD SCORE AND NAME
const formRight = document.querySelector('#form-right');
formRight.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputName = document.querySelector('#input-name');
  const newName = inputName.value;
  const inputScore = document.querySelector('#input-score');
  const newScore = inputScore.value;

  const newLeaderBoard = new LeaderBoard(newName, newScore);
  UserInterface.addScore(newLeaderBoard);
  LocalStorage.addScore(newLeaderBoard);
  UserInterface.clearFields();
});
