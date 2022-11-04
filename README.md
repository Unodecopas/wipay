# PREVIEW

[Preview](https://helpful-cajeta-3a7500.netlify.app/)

# DESCRIPTION

Se deberá desarrollar un panel de administración de usuarios que contemple las operaciones
básicas de tipo CRUD (Create, Read, Update, Delete). Dicho panel de administración debe
contener las siguientes funcionalidades:

- 1. Una pantalla inicial donde se muestre el número total de usuarios actuales.
- 2. Una pantalla para visualizar el listado de usuarios.
- 3. Una pantalla para visualizar los datos de un usuario.
- 4. Una pantalla para editar los datos de un usuario.
- 5. Un botón de acción para eliminar el usuario.
  - a. Dicho botón debe preguntar si se está seguro antes de eliminar el usuario.
  - b. Dicho botón debe aparecer en el listado de usuarios, en la vista de detalles de usuario y en la vista de edición de usuario.

Un usuario contiene los siguientes atributos junto a sus validaciones:

- 1. Un correo electrónico:
  - a. De tipo String.
  - b. Debe comprobarse que sea un correo electrónico válido.
- 2. Una contraseña:
  - a. De tipo String.
  - b. Debe tener entre 6 y 12 caracteres de longitud.
- 3. Una fecha de creación:
  - a. De tipo Date.
- 4. Una fecha de última actualización:
  - a. De tipo Date.
  - b. Este valor debe actualizarse cada vez que se actualice un usuario.
  - c. Por defecto, tiene el mismo valor que la fecha de creación.

Se valorará positivamente el uso de librerías como:

- 1. lodash
- 2. react-router-dom
- 3. validator
- Se valorará positivamente el uso de paginación para el listado de usuarios,aunque no es obligatorio.
- Se valorará positivamente el uso de un código limpio

# EXTRAS

Se ha añadido un buscador para filtar la lista de usuarios en función del email
Se ha añadido un select que permite ordenar la lista en función de los parámetros. Tanto por orden ascendente como decreciente
Se ha añadido un sistema de paginación propio para la lista de usuarios
Se ha adoptado un estilo visual basado en la web de la compañia

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
