import React from 'react';

const buttonPush = () => {console.log("Bottone premuto dal componente stampa!");};


function Stampa () 
{
    return (
        <div>
          <button onClick={buttonPush}>Click me</button>
        </div>
      )
}

export default Stampa;