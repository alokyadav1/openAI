import React, { useEffect, useState } from 'react'
import { NEWSAPI_KEY } from '../../config/apiKey';
import NewsBox from './NewsBox';
function NewsContainer() {
    const [NewsData, setNewsData] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWSAPI_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setNewsData(data.articles)
            });
    }, [])

    const handleCountry = (e) => {
        const country = e.target.value;
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&language=en&apiKey=${NEWSAPI_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setNewsData(data.articles)
            });
    }
    return (
        <div className="h-screen w-4/5">
            <div className="w-11/12 h-full mx-auto overflow-auto bg-white p-4">
                <h1 className="text-4xl text-center text-blue-900">News</h1>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <p>Total articles: {NewsData.length}</p>
                        <div className="xl:w-100 flex">
                            <p>Country : </p>
                            <select data-te-select-init className="ml-3" onChange={handleCountry}>
                                <option value="au">
                                    Australia (au)
                                </option>
                                <option value="ca">
                                    Canada (ca)
                                </option>
                                <option value="in" selected>
                                    India (in)
                                </option>
                                <option value="my">
                                    Malaysia (my)
                                </option>
                                <option value="ng">
                                    Nigeria (ng)
                                </option>
                                <option value="nz">
                                    New Zealand (nz)
                                </option>
                                <option value="ph">
                                    Phillipines (ph)
                                </option>
                                <option value="sa">
                                    Saudi Arabia (sa)
                                </option>
                                <option value="sg">
                                    Singapore (sg)
                                </option>
                                <option value="za">
                                    South Africa (za)
                                </option>
                                <option value="us">
                                    United States Of America (usa)
                                </option>
                                <option value="gb" >
                                    United Kingdom (gb)
                                </option>
                            </select>
                        </div>
                    </div>
                    {
                        NewsData.map((data, index) => {
                            return (
                                <NewsBox data={data} index={index} />
                            )
                        })
                    }
                    {/* <NewsBox data={NewsData[0]}/> */}
                </div>
            </div>
        </div>
    );
}

export default NewsContainer;