import React from 'react';

const Tabla = ({ multiplicador } = '') => {
    const numerosFijos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <ul>
                {numerosFijos.map((item) => (
                    <li key={item}>
                        {item} x {multiplicador} = {item * multiplicador}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabla;
