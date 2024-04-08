import { useState } from "react";
import { getDogData } from "./utils";
import DogLink from "./DogLink";

function DogList({ dogs }) {

    return (
        <div className="DogList">
            <h1>Dogs</h1>
            {dogs.map(dog => (<DogLink key={dog.name} className={`DogList-${dog}`} dog={dog} />))}
        </div>
    );
}

export default DogList;