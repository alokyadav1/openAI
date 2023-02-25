import React, { useState, useReducer } from 'react';
import "./output.css";
import ImgCard from '../../components/img-card/ImgCard';
import { openai } from '../../config/api';
import Error from '../../Error/Error';
import ErrorReducer from '../../reducers/ErrorReducer';
import Prompt from '../../components/prompt/Prompt';
function ImageGenerate() {
    //tailwind code to group input with Icon
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [prompt, setPrompt] = useState('');
    const [error, dispatchError] = useReducer(ErrorReducer, null);

    const handleDeleteError = () => {
        dispatchError({ type: "CLEAR_ERROR" });
    }
    const handleInputChange = (e) => {
        setPrompt(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // setTimeout(() => {
        //     setImages([...images, `https://source.unsplash.com/1600x900/?${prompt}`])
        //     setIsLoading(false);
        // }, 2000);

        if (!navigator.onLine) {
            dispatchError({ type: "SET_ERROR", payload: "You are not connected to Internet" });
        }
        try {
            const response = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: "1024x1024"
            });
            const imgUrl = response.data.data[0].url;
            setImages([...images, imgUrl]);
        } catch (error) {
            dispatchError({ type: "SET_ERROR", payload: error.response.data.error.message });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='output w-4/5'>
            <div className='main-container w-11/12 mx-auto'>
                <div className='w-full h-full'>
                    {
                        error && <Error error={error} handleDeleteError={handleDeleteError} />
                    }
                    {
                        isLoading ? (
                            <div className='flex justify-center items-center h-full'>
                                <span className=' text-2xl'>Loading...</span>
                            </div>
                        ) : (
                            images.length === 0 ? (
                                <div className="output-container w-full h-full flex justify-center items-center">
                                    <span>Please enter some Prompt</span>
                                </div>
                            ) : (
                                <div className='flex flex-wrap gap-x-6 gap-y-5 justify-center'>
                                    {
                                        images.map(url => {
                                            return <ImgCard url={url} />
                                        })
                                    }
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <Prompt
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
            
        </div>
    );
}

export default ImageGenerate;