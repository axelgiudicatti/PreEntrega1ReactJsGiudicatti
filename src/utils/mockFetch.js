const birras = [
  {
    id: 1,
    estilo: "IPA",
    price: 600,
    stock: 1500,
    IBU: 65,
    Alc: "6.5%",
    SRM: 12.5,
    foto: "ipa.webp.png",
  },
  {
    id: 2,
    estilo: "Golden Ale",
    price: 450,
    stock: 1500,
    IBU: 15,
    Alc: "5.2%",
    SRM: 12,
    foto: "golden.webp.png",
  },
  {
    id: 3,
    estilo: "Irish Red Ale",
    price: 550,
    stock: 1500,
    IBU: 25,
    Alc: "5%",
    SRM: 18,
    foto: "irish.webp.png",
  },
  {
    id: 4,
    estilo: "Oatmeal Stout",
    price: 600,
    stock: 1500,
    IBU: 35,
    Alc: "5.3%",
    SRM: 32,
    foto: "stout.webp.png",
  },
];

export const mFetch = () =>
  new Promise((res, rej) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        res(birras);
      }, 1500);
    } else {
      rej("No hay birras para vos, borrachin");
    }
  });
