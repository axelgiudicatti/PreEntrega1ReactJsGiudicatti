const birras = [
  {
    id: 1,
    category: "LATAS",
    estilo: "IPA",
    price: 600,
    stock: 1500,
    IBU: 65,
    Alc: "6.5%",
    SRM: 12.5,
    foto: "/ipa.webp.png",
  },
  {
    id: 2,
    category: "LATAS",
    estilo: "Golden Ale",
    price: 450,
    stock: 1500,
    IBU: 15,
    Alc: "5.2%",
    SRM: 12,
    foto: "/golden.webp.png",
  },
  {
    id: 3,
    category: "LATAS",
    estilo: "Irish Red Ale",
    price: 550,
    stock: 1500,
    IBU: 25,
    Alc: "5%",
    SRM: 18,
    foto: "/irish.webp.png",
  },
  {
    id: 4,
    category: "LATAS",
    estilo: "Oatmeal Stout",
    price: 600,
    stock: 1500,
    IBU: 35,
    Alc: "5.3%",
    SRM: 32,
    foto: "/stout.webp.png",
  },
  {
    id: 5,
    category: "BARRILES",
    estilo: "IPA",
    price: 600,
    stock: 1500,
    IBU: 65,
    Alc: "6.5%",
    SRM: 12.5,
    foto: "/barriles.webp",
  },
  {
    id: 6,
    category: "BARRILES",
    estilo: "Golden Ale",
    price: 450,
    stock: 1500,
    IBU: 15,
    Alc: "5.2%",
    SRM: 12,
    foto: "/barriles.webp",
  },
  {
    id: 7,
    category: "BARRILES",
    estilo: "Irish Red Ale",
    price: 550,
    stock: 1500,
    IBU: 25,
    Alc: "5%",
    SRM: 18,
    foto: "/barriles.webp",
  },
  {
    id: 8,
    category: "BARRILES",
    estilo: "Oatmeal Stout",
    price: 600,
    stock: 1500,
    IBU: 35,
    Alc: "5.3%",
    SRM: 32,
    foto: "/barriles.webp",
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
