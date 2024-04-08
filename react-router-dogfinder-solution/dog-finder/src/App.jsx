import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

/**
 * App
 *
 * state:
  * dogs: [{name...}]
  * isLoading: bool
 *
 * props: none
 *
 * App -> RouteList
 *
 */

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  async function loadDogs(){
    const response = await fetch("http://localhost:5001/dogs")
    const data = await response.json();
    setDogs({
      data,
      isLoading: false
    })
  }

  if (dogs.isLoading) {
    loadDogs();
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
