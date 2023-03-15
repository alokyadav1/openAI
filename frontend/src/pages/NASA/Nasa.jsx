import Potd from "./Potd";
import React from "react";
function Nasa() {
    // const [nasaData, setNasaData] = useState(null);

    return ( 
        <div className="h-screen w-4/5">
            <div className="w-11/12 h-full mx-auto overflow-auto bg-slate-300">
                <h1 className="text-4xl text-center text-blue-900">Nasa</h1>
                <Potd />
            </div>
        </div>
     );
}

export default Nasa;