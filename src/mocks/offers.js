const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default [
  {
    id: `1`,
    isPremium: true,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view1`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view2`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view3`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view4`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view5`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view6`,
      },
    ],
    name: `Beautiful & luxurious studio at great location`,
    price: `100`,
    type: `Apartment`,
    isFavorite: true,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    goods: [
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
  }, {
    id: `2`,
    isPremium: false,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view7`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view8`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view9`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view10`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view11`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view12`,
      },
    ],
    name: `Beautiful & luxurious`,
    price: `200`,
    type: `Private room`,
    isFavorite: false,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    goods: [
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
  }, {
    id: `3`,
    isPremium: true,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view13`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view14`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view15`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view16`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view17`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view18`,
      },
    ],
    name: `Beautiful studio at great location`,
    price: `300`,
    type: `Apartment`,
    isFavorite: true,
    city: `Amsterdam`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    goods: [
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
  }, {
    id: `4`,
    isPremium: false,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view19`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view20`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view21`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view22`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view23`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view24`,
      },
    ],
    name: `Luxurious studio at great location`,
    price: `400`,
    type: `Fridge box`,
    isFavorite: true,
    city: `New York`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    goods: [
      `Wi-Fi`,
    ],
    host: `Donald`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `Located between Rembrand Square and National Opera.`,
  }, {
    id: `5`,
    isPremium: true,
    images: [
      {
        src: `http://placehold.it/260x200/33bee5&text=view25`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view26`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view27`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view28`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view29`,
      }, {
        src: `http://placehold.it/260x200/33bee5&text=view30`,
      },
    ],
    name: `Luxurious studio at great location`,
    price: `500`,
    type: `Fridge box`,
    isFavorite: true,
    city: `London`,
    rating: `${getRandomInt(1, 5)}`,
    bedrooms: `${getRandomInt(1, 5)}`,
    adults: `${getRandomInt(1, 5)}`,
    goods: [
      `Wi-Fi`,
      `Coffee machine`,
    ],
    host: `Donald`,
    avatar: `https://api.adorable.io/avatars/${getRandomInt(1, 500)}`,
    description: `Located between Rembrand Square and National Opera.`,
  }
];
