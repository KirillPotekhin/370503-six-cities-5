const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default [
  {
    id: `1`,
    name: `Max`,
    rating: `${getRandomInt(1, 5)}`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(100, 500)}`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(),
  }
];
