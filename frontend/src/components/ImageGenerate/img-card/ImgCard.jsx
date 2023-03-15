import React from 'react';
import "./style.css";
import { saveAs } from 'file-saver';
import { Download } from '@mui/icons-material';

function ImgCard({ url }) {
    //code to initiate the image download process in react
    const handleDownload = async () => {
        // const name = "image.jpg";
        // const blob = await fetch(url, {
        //     mode:"cors",
        //     headers:{
        //         "access-control-allow-origin":"*"
        //     },
        //     referrerPolicy:"origin-when-cross-origin"
        // })
        // .then(r => r.blob());
        saveAs(url, "image.jpg");
    }
    return ( 
        <div className="img-card rounded-md text-center">
            <img src={url} alt="img" className='w-full rounded-md' />
            <button className='bg-white text-blue-900 w-1/2 p-2 rounded-md mt-1 flex justify-center' onClick={handleDownload}>
            Download <Download />
            </button>
        </div>
     );
}

export default ImgCard;