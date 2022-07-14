import React, { useEffect } from 'react';
import Post from './Components/Post';
import Stampa from './Components/Stampa';
import Counter from './Components/Counter'
import {useState} from 'react'
import FunctionEvent from './Components/FunctionEvent';
import axios from 'axios';




function App() {


  const [post, setPost] = useState([
  {name: "Giacomino", surname: "La Mazza", post: "Ciao Mondo belllo"},
  {name: "Aldo", surname:"Giovanni", post:"Aldo Giovanni e Giacomo è un bel trio"}
  ]);


  const [loc, setLocations] = useState([{id: null, Location:''}])
  const [postDesc, setPostDesc] = useState(['Inserisci valore']);

  const handleUserInput = (event) =>
  {
    setPostDesc(event.target.value)
    console.log(postDesc)
  }


  const fetchRandData = async () =>
  {
    await axios.get('https://retoolapi.dev/gxljse/locations')
    .then((data) =>
    {
      setLocations(data)
      console.log("logging loc")
      console.log(loc)
    })
    .catch((err) =>
    {
      console.error("error during fetching data", err)
    })
  }


  useEffect( () =>
  {
    fetchRandData();
  }, [])

  return (
    <div>
      <h2> Ciao Mondo!</h2>
      {
        post.map((post, index) => (
          <Post key={index} name={post.name} surname={post.surname} post={post.post}/>
        ))}
      <hr/>
      <h2>Catching user input changes.</h2>
      <input type="text" placeholder={postDesc} onChange={handleUserInput}/>
          <pre>
            <code> {JSON.stringify(loc, null,2)}</code>
          </pre>

    </div>
  )
}

export default App