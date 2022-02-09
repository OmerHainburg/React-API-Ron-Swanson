import React, { useState, useEffect} from "react";
import "./styles.css";
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [quote, setQuote] = useState('Loading...');

  //Axios
  useEffect(() => {
    const interval = setInterval(() => {
       let urlFinal = "https://api.kanye.rest";
       axios.get(urlFinal)
       .then((res) => {
         //Get Quote From URL
         let newQoute = res.data.quote;
         setQuote(newQoute);
     })
           setUrl(urlFinal);
       }, 5000);
       return () => clearInterval(interval);
}, [url]);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>QUOTE</p>
      {quote}
    </div>
  );
}

export default App;
