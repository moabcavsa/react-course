import React from 'react';
import Post from './Components/Post';
import Stampa from './Components/Stampa';
import Counter from './Components/Counter'
import {useState} from 'react'


function App() {

  const [post, setPost] = useState([
  {name: "Giacomino", surname: "La Mazza", post: "Ciao Mondo belllo"},
  {name: "Aldo", surname:"Giovanni", post:"Aldo Giovanni e Giacomo è un bel trio"}
  ]);
  return (
    <div>
      <h2> Ciao Mondo!</h2>
      {
        post.map((post, index) => (
          <Post key={index} name={post.name} surname={post.surname} post={post.post}/>
        ))}
      <hr/> 
    </div>
  )
}

export default App