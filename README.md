La pagina construida se trata de un e-commerce. La pagina es practicamente dinamica en su totalidad. Permite el agregado y eliminado de manera fluida de items al carro, e incluye una sumatoria de subtotales y valor total de la compra. El cartwidget permite la correcta visualizacion y actualizacion en tiempo real del total de productos en el mismo.
Al finalizar la compra, se envia a la base de datos un detalle del pedido que incluye el ID del mismo, los datos del comprador y la totalidad del monto abonado.
El usuario recibe en pantalla la información de ID correspondiente a su pedido.

Casi la totalidad del estilizado fue hecha con CSS

La aplicación web fue deployada a partir del repositorio en GitHub y se encuentra alojada en el link:

https://main--delightful-rugelach-62dd35.netlify.app/

Librerias externas empleadas:

"@fortawesome/fontawesome-svg-core": "^6.4.2", | tipografia e iconos
"@fortawesome/free-solid-svg-icons": "^6.4.2", | tipografia e iconos
"@fortawesome/react-fontawesome": "^0.2.0", | tipografia e iconos
"bootstrap": "^5.3.1", | diseno y desarrollo de la web, framework
"firebase": "^10.4.0", | base de datos/backend
"react": "^18.2.0", | React/dinamica de la web
"react-bootstrap": "^2.8.0", | diseno y desarollo de la web, framework
"react-dom": "^18.2.0", | virtual-dom y proceso de renderizado de react
"react-icons": "^4.10.1", | tipografia e iconos
"react-router-dom": "^6.15.0", | enrutada de vistas en React
"typeface-quicksand": "^1.1.13" | tipografia
"sweetalert2": "^11.7.32", | alertas esteticas, usado para validacion de form

Axel Giudcatti, axel.giudicatti@gmail.com. ig: @axelgiudicatti, linkedin: Axel Giudicatti, X: Axel Giudicatti

git clone https://github.com/axelgiudicatti/PreEntrega1ReactJsGiudicatti.git || CLONADO DEL REPO
cd ......../PreEntrega1ReactJsGiudicatti || POSICIONAMIENTO EN EL PROYECTO DE MANERA LOCAL
npm install firebase || INSTALACION DE FIREBASE/BACKEND
$ npm create vite@latest || CREACION DEL PROYECTO CON VITE, USANDO REACTJS NATIVO
npm run build || CONSTRUCCION DE LOS ARCHIVOS ESTATICOS DEL SITIO
npm run dev || SIMULACION LOCAL DEL SITIO
