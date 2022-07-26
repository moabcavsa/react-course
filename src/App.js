import React, { useEffect } from 'react';
import Post from './Components/Post';
import Stampa from './Components/Stampa';
import Counter from './Components/Counter'
import {useState} from 'react'
import FunctionEvent from './Components/FunctionEvent';
import axios from 'axios';
import {getCompanies} from './Services/apiAxios'
import Company from './Components/Company';
import FrontPage from './Components/FrontPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import JobTimeline from './Components/JobTimeline';


function App() {


  const [companies, setCompany] = useState([{id: null, Logo: '', CompanyName: '', PaymentType: '', RatingCompany: ''}])

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


  const fetchRandData =  () =>
  {
    const res = axiosGet().then(data => {
      setLocations(data.data)
      console.log(loc)
    }
    )
  }


  const getAllCompanies = () => 
  {
    getCompanies().then(data =>{
      setCompany(data.data);
  })
  }


  const axiosGet = () => {
    return  axios.get('https://retoolapi.dev/gxljse/locations')
    .then((data) =>
    {
     return(data)
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
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="JobTimeline" element={<JobTimeline/>}/>
      </Routes>
      
    </div>
  )
}

export default App