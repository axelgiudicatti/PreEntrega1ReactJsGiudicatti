# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

La pagina construida se trata de un e-commerce. La pagina es practicamente dinamica en su totalidad. Permite el agregado y eliminado de manera fluida de items al carro, e incluye una sumatoria de subtotales y valor total de la compra. El cartwidget permite la correcta visualizacion y actualizacion en tiempo real del total de productos en el mismo.
Al finalizar la compra, se envia a la base de datos un detalle del pedido que incluye el ID del mismo, los datos del comprador y la totalidad del monto abonado.
El usuario recibe en pantalla la información de ID correspondiente a su pedido.

Casi la totalidad del estilizado fue hecha con CSS

La aplicación web fue deployada a partir del repositorio en GitHub y se encuentra alojada en el link:

https://main--delightful-rugelach-62dd35.netlify.app/

Dependencias empleadas:
"@fortawesome/fontawesome-svg-core": "^6.4.2",
"@fortawesome/free-solid-svg-icons": "^6.4.2",
"@fortawesome/react-fontawesome": "^0.2.0",
"bootstrap": "^5.3.1",
"firebase": "^10.4.0",
"react": "^18.2.0",
"react-bootstrap": "^2.8.0",
"react-dom": "^18.2.0",
"react-icons": "^4.10.1",
"react-router-dom": "^6.15.0",
"typeface-quicksand": "^1.1.13"

Axel Giudcatti, axel.giudicatti@gmail.com. ig: @axelgiudicatti, linkedin: Axel Giudicatti, X: Axel Giudicatti
