import React, { useState, useEffect } from 'react';
function Date() {
    const [dateFact, setDateFact] = useState(null);
    const [todaysDate, setTodaysDate] = useState("3/15")
    const getDate = () => {
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDate();
        return `${day}/${month}`;
    }
    useEffect(() => {
        fetch(`http://numbersapi.com/${todaysDate}/date`)
        .then(res => res.text())
        .then(fact => {
            setDateFact(fact);
        })
    },[todaysDate])

    const fetchAnotherFact = () => {
        fetch(`http://numbersapi.com/${todaysDate}/date`)
        .then(res => res.text())
        .then(fact => {
            setDateFact(fact);
        })
    }

    return (
        <div className=" bg-amber-500 w-4/5 rounded-lg relative">
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='bg-white text-blue-700 w-96 p-8 rounded-2xl shadow-2xl'>
                    <p className=' text-3xl font-bold'>
                        {dateFact}
                    </p>
                </div>
                <div className=' mt-8 shadow-lg'>
                    <button className='w-full bg-indigo-700 text-white p-2 rounded-full' onClick={fetchAnotherFact}>New</button>
                </div>

            </div>
        </div>
    );
}

export default Date;