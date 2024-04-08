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
 * State: none
 *
*/

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dogData, setDogData] = useState(null);

  async function loadData() {
    setDogData(await getDogData());
    setDataLoaded(true);
  }

  if (!dataLoaded) {
    loadData();
  }

  return (
    <div className="App">
      {dataLoaded
        ?
        <BrowserRouter >
          <NavBar dogs={dogData} />
          <Routes>
            <Route path="/dogs" element={<DogList dogs={dogData} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogData} />} />
          </Routes>
        </BrowserRouter>
        : <h3 className="App-loading" >Loading...</h3>}
    </div>
  );
}

export default App;
