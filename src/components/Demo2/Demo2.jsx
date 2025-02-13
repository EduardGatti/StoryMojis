import React, { useState } from 'react'
import Usuario from '../Usuario/Usuario';

function Demo2() {
    const [valor, setValor] = useState(0);
    const [usuario, setUsuario] = useState("");

    const  incrementar = () => {

        setValor(valor + 1);

    }
    const diminuir = () => {

        setValor(valor - 1)
    }
    return (
      <div className="container-Demo">
 
        <h2>useState</h2>
        <button onClick={incrementar}>+</button>
        {valor}
        <button onClick={diminuir}>-</button>
        <button onClick={() => {setUsuario(prompt("Username:"))}}>Fazer Login</button>
        {usuario ? <p>Olá, {usuario}</p> : <p>Faça login</p> }

        {usuario && <Usuario username = {usuario} />}
    </div>
    
  )
}

export default Demo2