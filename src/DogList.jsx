import DogLink from "./DogLink";


/** List of all dogs (with photo and name).
 *
 * Props: dogs [ {name: , age: , src: , facts: [fact1, fact2, ...]}, ...  ]
 * State: none
 *
 * App -> DogList -> DogLink
*/
function DogList({ dogs, updateCurrDog }) {
    return (
        <div className="DogList">
            <h1>Dogs</h1>
            {dogs.map(dog => (<DogLink key={dog.name} className={`DogList-${dog}`} dog={dog} updateCurrDog={updateCurrDog}/>))}
        </div>
    );
}

export default DogList;