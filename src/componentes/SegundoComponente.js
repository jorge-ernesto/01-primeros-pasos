import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    // const libros = [];

    return (
        <div className="segundo-componente">
            <h2>Segundo Componente creado</h2>

            {/*
            En JSX, se debe usar map en lugar de forEach
            Foreach itera sobre los elementos de un array pero no devuelve nada, por lo que en tu código, libros.forEach(...) dentro del JSX no está devolviendo elementos <li> como se espera.
            Map, por otro lado, crea un nuevo array transformado con los elementos retornados por la función de mapeo. Es perfecto para generar un array de elementos <li> basado en los elementos del array libros.
            */}

            {libros.length >= 1 ?
                (<ul>
                    {
                        libros.map((element, i) => {
                            return <li key={i}>{element}</li>
                        })
                    }
                </ul>)
                : (<p>No hay libros</p>)
            }
        </div >
    )
}
