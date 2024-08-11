import React, { useState } from 'react';
import Input from './input';
import Tabla from './tabla';

//create your first component
const Home = () => {
    const [multiplicador, setMultiplicador] = useState('');
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Tablas de Multiplicar</h1>
            <Input setMultiplicador={setMultiplicador} />
            <Tabla multiplicador={multiplicador} />
        </div>
    );
};

export default Home;
