import LocalStorage from './localStorage.js';

class UserInterface {
  static showScore() {
    const scores = LocalStorage.getScore();
    scores.forEach((item) => UserInterface.addScore(item));
  }

  static addScore(item) {
    const formLeft = document.querySelector('.form-left-div-content');
    formLeft.innerHTML += `
      <span class="form-span">
        <p id="name">${item.name}</p>
        :&nbsp;
        <p id="score">${item.score}</p>
      </span>
      `;
  }

  static clearFields() {
    const formRight = document.querySelector('#form-right');
    formRight.reset();
  }
}

export default UserInterface;
