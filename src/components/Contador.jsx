import { useState } from "react";

const Contador = () => {
    //zona donde escribimos logica
    // let prueba = 10;
    //crear un state
    const [numero, setNumero] = useState(10)


    const sumar = () =>{
        // console.log('desde la funcion sumar')
        // numero++ nunca modificar directamente el state
        setNumero( numero + 1)
    }

    return (
        // aqui puedo escribir mas logica
        <div>
            {/* aqui va el maquetado con un poquito de logica */}
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button onClick={sumar}>+1</button>
            {/* agregar 2 botones uno que reste uno que resetee el state */}
        </div>
    );
};

export default Contador;