import React from 'react'

export const EventosComponente = () => {

    function hasDadoClick(e, nombre) {
        console.log(e);
        alert('Has dado click al boton: ' + nombre);
    }

    const hasDadoClickArrowFunction = (e) => {
        console.log(e);
        alert('Has dado click al boton');
    }

    return (
        <div>
            <h2>Eventos en React</h2>

            {/* Evento click */}
            <button onClick={(e) => {
                console.log(e);
                console.log('Hola, soy un evento click.')
            }}>Dame click!</button>

            {/* Evento click */}
            <button onClick={(e) => { hasDadoClick(e, "Victor") }}>Dame click!</button>

            {/* Evento click */}
            <button onClick={(e) => { hasDadoClickArrowFunction(e) }}>Dame click!</button>
        </div>
    )
}
