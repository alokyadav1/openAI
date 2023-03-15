import { NASA_API_KEY } from "../../config/apiKey";
import { useState, useEffect } from "react";
import "./nasa.css"
function Potd() {
    const [potdData, setPotdData] = useState(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setPotdData(data);
            });
    }, [])
    console.log(potdData);
    console.log(potdData?.url);
    return (
        <div className="potd">
            <div className="potd-inner-container">
                <h1 className="text-2xl text-center">Picture of the Day</h1>
                <div className="img-container w-3/4 mx-auto rounded-2xl shadow-2xl">
                    <img src={potdData?.url} alt="" />
                    <h2 className="text-center text-xl">{potdData?.title}</h2>
                    <p></p>
                </div>
                <div className="explanation">
                    <p>{potdData?.explanation}</p>
                </div>
            </div>
        </div>
    );
}

export default Potd;