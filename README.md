# PT_GuideSmiths
Your task is to write a very simple product catalogue app.

Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java...) that...
Has 1 endpoint /phones
Returns the attached "phones.json" payload (or a free version of it)
The data can all be mocked, no need for a persistence layer
Write a React app that displays the phones from the API
Use redux for state management and Axios (or similar library) for fetching data from the API
Display an initial list with all phones
When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone
Display a spinner or placeholder component while the API request is ongoing
Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
Push the code to a public github repo with a README.md that explains how to run API & Frontend app.

///////////////


En esta prueba técnica he utilizado la información del data.json que venía ya hecho y además de añadirle algunas imágenes más también le he añadido otro endpoint (/tablets).
Para el fetch dado que no he llegado a dominar redux ni useReducer he usado useState y useEffect que es con lo que me setía más cómodo.
La app consta de varias páginas:
- Home: En esta página simplemente aparecen dos imágenes, de un teléfono y una tablet que al pusar sobre cada una de ellas navegará hasta una lista de teléfonos o tablets según la elección. Antes de cargar la siguiente página he añadido un spinner de carga mediante un custom hook.s
- Phones: Esta página es una lista de todos los teléfonos con algo de información. Al pulsar sobre la imagen de cualquiera de los teléfonos aparecerá un popup (he usado la librería de popup para ello) con una pequeña descripción del dispositivo junto con su imagen y un botón de +info que te llevará a una página de detalle.
- Tablets: Es igual que la página de Phones pero con tablets.
- Phone/Tablet: Al pulsar el botón +info te llevará a esta página en la que se muestran 3 fotos del dispositivo junto con una lista de todos los detalles y características.
