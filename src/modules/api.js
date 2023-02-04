const defaultUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameUrl = `${defaultUrl}/games/C2JtbqkIjKaSHImZ3Hwd/scores`;

export const getGame = async () => {
  const request = await fetch(gameUrl);
  const response = await request.json();
  return response.result;
};

export const postGame = async (name, score) => {
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
