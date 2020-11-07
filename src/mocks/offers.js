const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default [
  {
    isMark: true,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      },
    ],
    name: `Beautiful & luxurious studio at great location`,
    price: `${getRandomInt(1, 1000)}`,
    type: `Apartment`,
    id: `${getRandomInt(1, 5)}`,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    host: `Angelina`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.

    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    isFavorite: true,
  }, {
    isMark: false,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      },
    ],
    name: `Beautiful & luxurious`,
    price: `${getRandomInt(1, 1000)}`,
    type: `Private room`,
    id: `${getRandomInt(1, 5)}`,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Cabel TV`,
      `Fridge`,
    ],
    host: `Vasiliy`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `A quiet cozy and picturesque that located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    isFavorite: true,
  }, {
    isMark: true,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      },
    ],
    name: `Beautiful studio at great location`,
    price: `${getRandomInt(1, 1000)}`,
    type: `Apartment`,
    id: `${getRandomInt(1, 5)}`,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    inside: [
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    host: `Vladimir`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    isFavorite: true,
  }, {
    isMark: false,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view${getRandomInt(1, 6)}`,
      },
    ],
    name: `Luxurious studio at great location`,
    price: `${getRandomInt(1, 1000)}`,
    type: `Fridge box`,
    id: `${getRandomInt(1, 5)}`,
    city: `New York`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    inside: [
      `Wi-Fi`,
    ],
    host: `Donald`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `Located between Rembrand Square and National Opera.`,
    isFavorite: true,
  }
];
