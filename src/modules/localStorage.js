let scores = [
  {
    name: 'Name1',
    score: '1',
  },
  {
    name: 'Name2',
    score: '2',
  },
  {
    name: 'Name3',
    score: '3',
  },
  {
    name: 'Name4',
    score: '4',
  },
  {
    name: 'Name5',
    score: '5',
  },
];

class LocalStorage {
  static getScore() {
    if (localStorage.getItem('leaderboard') === null) {
      localStorage.setItem('leaderboard', JSON.stringify(scores));
    } else {
      scores = JSON.parse(localStorage.getItem('leaderboard'));
    }
    return scores;
  }

  static addScore(item) {
    const scores = LocalStorage.getScore();
    scores.push(item);
    localStorage.setItem('leaderboard', JSON.stringify(scores));
  }
}

export default LocalStorage;
