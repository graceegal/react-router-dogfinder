import { useState } from "react";
import { getDogData } from "./utils";

function DogList() {
    const [dataLoaded, setDataLoaded] = useState(false);

    const dogData = await getDogData();

    return (
        <div className="DogList">
            {dataLoaded
                ?
                    <div>
                        <h1>Dogs</h1>
                        {dogData.map(dog => (<DogLink className={`DogList-${dog}`} dog={dog} />))}
                    </ div>
                : <h3 className="DogList-loading">Loading...</h3>}
        </div>
    );
}