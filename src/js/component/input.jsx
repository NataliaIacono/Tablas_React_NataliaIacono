import React, { useState } from 'react';

const Input = ({ setMultiplicador }) => {
    const [inputValue, setInputValue] = useState('');
    //const [mostrarTabla, setMostrarTabla] = useState(false);

    const numeroDelInput = (event) => {
        setInputValue(Number(event.target.value)); // para obtener el valor del input
    };

    /*const mostrarTabla = () => {
        return numerosFijos[index] * inputValue;
    };*/

    return (
        <div>
            <h1>Elige la table que quieras ver</h1>
            <input type="number" placeholder="ingresa un numero del 1 al 10" value={inputValue} onChange={numeroDelInput} />
            <button
                onClick={() => {
                    setMultiplicador(inputValue);
                }}>
                Mostrar tabla
            </button>
        </div>
    );
};

export default Input;
