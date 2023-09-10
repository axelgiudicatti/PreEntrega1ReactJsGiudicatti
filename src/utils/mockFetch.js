const birras = [
  {
    id: 1,
    category: "LATAS",
    description:
      "De origen británico. Cerveza de color ambar que tiene al lúpulo como principal protagonista. Es una cerveza fuerte, de amargor intenso característico acompañado con aromas y sabores terrosos, propios de los lúpulos europeos. De buen cuerpo y final balanceado y sutil, gracias al aporte que hacen las maltas caramelo. Resumiendo, una bomba de lúpulo con un final feliz. Estás dispuesto a explotarla ?",
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
    description:
      "Versión ALE de la PILSEN LAGER germana. La golden es una cerveza extremadamente clara que se destaca por su marcado sabor a malta y bajo amargor. Es una cerveza muy ligera y refrescante, lo que le otorga una gran tomabilidad . El empleo de maltas pilsen en su elaboración le otorgan su característico tono dorado. De espuma blanca y persistente, bajo o nulo aroma y sabor a lúpulo. Estás tomando una mientras lees esto ?",
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
    description:
      "Cerveza de color cobre profundo y cuerpo mediano. Aromas a caramelo muy marcados aunque los lúpulos también se hacen presentes. En boca, se siente un leve dulzor maltoso que se balancea perfectamente con un cierre de sabor a lúpulo. La irish es una cerveza muy compleja y díficil de equilibrar, pero una vez que se logra, el resultado esasombroso. Es el resultado de la combinación óptima entre lúpulos y maltas caramelos. Para sumarle complejidad, la temperatura de servido también cumple un rol en el sabor de una irish. El frío desplaza el equilibro hacia los tonos dulces, mientras que temperaturas de servido ligeramente mayores resaltan el amargor de los lúpulos. Vos, como la preferis ?",
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
    description:
      "Pensaste que la avena era sólo para el desayuno ? Pues no, la OATMEALSTOUT es una cerveza color negro intenso cuya principipal característica es el empleo de avena en su elaboración. Aroma intenso a café, cacao y notas tostadas que también se confirman en boca. El agregado de avena le otorga sedosidad en paladar. Su espuma es blanca y notablemente densa y duradera. Oscura, de mucho cuerpo y altacomplejidad de sabores. Ahora te gusta un poco más la avena, no ?",
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
    description:
      "De origen británico. Cerveza de color ambar que tiene al lúpulo como principal protagonista. Es una cerveza fuerte, de amargor intenso característico acompañado con aromas y sabores terrosos, propios de los lúpulos europeos. De buen cuerpo y final balanceado y sutil, gracias al aporte que hacen las maltas caramelo. Resumiendo, una bomba de lúpulo con un final feliz. Estás dispuesto a explotarla ?",
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
    description:
      "Versión ALE de la PILSEN LAGER germana. La golden es una cerveza extremadamente clara que se destaca por su marcado sabor a malta y bajo amargor. Es una cerveza muy ligera y refrescante, lo que le otorga una gran tomabilidad . El empleo de maltas pilsen en su elaboración le otorgan su característico tono dorado. De espuma blanca y persistente, bajo o nulo aroma y sabor a lúpulo. Estás tomando una mientras lees esto ?",
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
    description:
      "Cerveza de color cobre profundo y cuerpo mediano. Aromas a caramelo muy marcados aunque los lúpulos también se hacen presentes. En boca, se siente un leve dulzor maltoso que se balancea perfectamente con un cierre de sabor a lúpulo. La irish es una cerveza muy compleja y díficil de equilibrar, pero una vez que se logra, el resultado esasombroso. Es el resultado de la combinación óptima entre lúpulos y maltas caramelos. Para sumarle complejidad, la temperatura de servido también cumple un rol en el sabor de una irish. El frío desplaza el equilibro hacia los tonos dulces, mientras que temperaturas de servido ligeramente mayores resaltan el amargor de los lúpulos. Vos, como la preferis ?",
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
    description:
      "Pensaste que la avena era sólo para el desayuno ? Pues no, la OATMEALSTOUT es una cerveza color negro intenso cuya principipal característica es el empleo de avena en su elaboración. Aroma intenso a café, cacao y notas tostadas que también se confirman en boca. El agregado de avena le otorga sedosidad en paladar. Su espuma es blanca y notablemente densa y duradera. Oscura, de mucho cuerpo y altacomplejidad de sabores. Ahora te gusta un poco más la avena, no ?",
    estilo: "Oatmeal Stout",
    price: 600,
    stock: 1500,
    IBU: 35,
    Alc: "5.3%",
    SRM: 32,
    foto: "/barriles.webp",
  },
  {
    id: 9,
    category: "BEERTRUCKS",
    description:
      " 2 canillas a elección, y la mejor onda. El precio incluye todo lo necesario para el evento, te lo llevamos, lo instalamos y listo ! Lo buscamos al día siguiente, así que tomá tranquilo. Nosotros nos ocupamos. ",
    estilo: "Doble canilla",
    price: 50000,
    stock: "a coordinar",
    IBU: "variable",
    Alc: "MUCHO",
    SRM: "N/C",
    foto: "/beertruck2.jpg",
  },
  {
    id: 10,
    category: "BEERTRUCKS",
    description:
      " 4 canillas a elección, y la mejor onda. Subite a la BIRRONETA elgida por Scaloni. El precio incluye todo lo necesario para el evento, te lo llevamos, lo instalamos y listo ! Lo buscamos al día siguiente, así que tomá tranquilo. Nosotros nos ocupamos. (NO INCLUYE LA COPA DEL MUNDO)",
    estilo: "Cuadrúple canilla",
    price: 95000,
    stock: "a coordinar",
    IBU: "variable",
    Alc: "MUCHO",
    SRM: "N/C",
    foto: "/beertruck2.jpg",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(pid ? birras.find((birra) => birra.id == pid) : birras);
    }, 1500);
  });
