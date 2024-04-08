import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NavBar from "./NavBar";
import './App.css';
import { getDogData } from "./utils";


/** Component for entire page.
 *
 * Props: none
 * State:
 *  - dataLoaded (boolean)
 *  - dogData [ {name: , age: , src: , facts: [fact1, fact2, ...]}, ...  ]
 *
 * App -> { NavBar, DogList, DogDetails}
*/
function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dogData, setDogData] = useState(null);
  const [currDog, setCurrDog] = useState(null);

  async function loadData() {
    setDogData(await getDogData());
    setDataLoaded(true);
  }

  if (!dataLoaded) {
    loadData();
  }

  function updateCurrDog(name) {
    const dog = dogData.filter(d => d.name === name)[0];
    setCurrDog(dog);
  }

  return (
    <div className="App">
      {dataLoaded
        ?
        <BrowserRouter >
          <NavBar dogs={dogData} updateCurrDog={updateCurrDog} />
          <Routes>
            <Route path="/dogs" element={<DogList dogs={dogData} updateCurrDog={updateCurrDog} />} />
            <Route path="/dogs/:name" element={<DogDetails dogData={currDog} />} />
          </Routes>
        </BrowserRouter>
        : <h3 className="App-loading" >Loading...</h3>}
    </div>
  );
}

export default App;
