const BASE_URL = "http://localhost:5001/dogs";

async function getDogData() {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();
    return data;
}

// async function getSpecificDogData(dogName) {
//     const data = await getDogData();
//     const dogData = data.filter(d => d.name === dogName);
//     return dogData[0];
// }

export { getDogData };