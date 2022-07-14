import React from 'react';
import '../App.css'
import { useState } from 'react';



function Counter()
{
    const [counter, setCounter] = useState(0);
    const increment = () => {setCounter(counter + 1)};

    return(
        <div className={'Counter'}>
            <h2> Counter</h2> <p>{counter}</p>
            <button onClick={increment}>Conta</button>
        </div>
    )
}

export default Counter


