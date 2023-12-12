import React from 'react'
import PropTypes from "prop-types"

export const TercerComponente = ({
                                    nombre,
                                    apellidos,
                                    ficha
                                }) => {

    // Declarar variables
    // let { nombre, apellidos, ficha_medica } = props;

    // Debug
    // console.log(props);

    return (
        <div>
            <h2>TercerComponente</h2>
            <h3>Comunicación entre componentes</h3>
            <ul>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>
        </div>
    )
}

// PropTypes y validación de props
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha_medica: PropTypes.object,
}

// Valores por defecto en los props
TercerComponente.defaultProps = {
    nombre: "Juan",
    apellidos: "Martinez"
}
