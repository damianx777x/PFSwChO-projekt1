import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div>
      <h1> Dokumentacja wykonania projektu </h1> <br/>
      <p> Zadanie zostalo zrealizowane na podstawie przykladu z laboratorium 9. </p>
      <img src={"./diagram.png"} /> <br/>
      <p> Aplikacja sklada sie z nastepujacych kontenerow: </p>
      <Link to="/">Go back home</Link>
      <footer> Politechnika Lubelska 2022 </footer>
      
    </div>
  );
};
