import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import "./index.js";
import styled from 'styled-components'

export default function App() {
  const [pic,setPic] = useState([])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=aMD4uPFAWDu9f0NbamzRt5xW4f8uQ3jLmtFFzEv4')
    .then(res => {
      setPic(res.data)
      console.log(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  }, []);

  const StyledDiv = styled.div`
  background-image:url(${pic.hdurl});
  height:100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  `
  
  return (
    <body>
      <div className="App-header">
        <nav>
          {pic.explanation}
        </nav>
      </div>
      <StyledDiv>
        <div></div>
      </StyledDiv>
      </body>
  );
}

 
