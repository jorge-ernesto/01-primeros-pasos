// Importar modulos de react
import React from "react";

// Funcion del componente
const MiComponente = () => {

    /*
    let nombre = "Victor";
    let web = "victororblesweb.es";
    */

    let usuario = {
        nombre: "Victor",
        apellidos: "Robles",
        web: "victoroblesweb.es"
    };
    // console.log(usuario);

    return (
        // Renderizar muchas etiquetas en JSX
        // <></>
        // <Fragment></Fragment>
        // <div></div>
        <div className="mi-componente">
            <h2>Componente creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
                <li>JSON completo: {JSON.stringify(usuario)}</li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>
    );
}

// Export
export default MiComponente;
