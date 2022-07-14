import React from 'react';

import '../App.css'

function Post (props) {
    return (
        <div className={'Post'}>
        <p>Nome: {props.name}</p>
        <p>Cognome: {props.surname}</p>
        <p>Cosa pensa: {props.post}</p>
        <button>Like</button>
        </div>
    )
}

export default Post;