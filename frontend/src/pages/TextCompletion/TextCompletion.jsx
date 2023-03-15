import React, { useState, useReducer } from 'react';
import { openai } from '../../config/api';
import Error from '../../Error/Error';
import ErrorReducer from '../../reducers/ErrorReducer';
import Prompt from '../../components/prompt/Prompt';
import TextResult from '../../components/TextCompletion/TextResult';
import "./textCompletion.css"

function TextCompletion() {
    //tailwind code to group input with Icon
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
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

        if (!navigator.onLine) {
            dispatchError({ type: "SET_ERROR", payload: "You are not connected to Internet" });
        }
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 2000,
                temperature: 0,
            });
            const result = response.data.choices[0].text;
            setResult(result);
        } catch (error) {
            dispatchError({ type: "SET_ERROR", payload: error.response.data.error.message });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='output w-4/5'>
            <div className='text-container w-11/12 mx-auto'>
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
                            <TextResult
                                prompt={prompt}
                                result={result}
                            />
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

export default TextCompletion;