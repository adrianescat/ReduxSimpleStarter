import React from  'react'; //Core library. Para crear/manejar los componentes.
import ReactDOM from  'react-dom'; //Para renderizar en el DOM.

//Creo un componente. Este debe producir HTML.
const App = () => {
    return <div>Hello World!</div>
}

/* El HTML generado lo meto en la página (DOM)
 * params:
 * <App > - instancia de la clase App. Debemos pasar una instancia y no la clase.
 * DomElement - Pasamos el elemento donde debe renderizar el HTML generado.
 */
ReactDOM.render(<App />, document.querySelector('.container'));