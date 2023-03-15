import "./prompt.css"
function Prompt({ handleInputChange, handleSubmit, handleSource }) {
    return (
        <div className="prompt w-11/12 mx-auto mt-1">
            <form className="flex justify-around items-center">
                <div className="input-group flex justify-center items-center w-3/4">
                    <input
                        type="text"
                        className="w-full p-3"
                        onChange={handleInputChange}
                    />
                    <button className="btn text-white p-3" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="flex justify-center items-center w-1/4 mx-4">
                    <span>Source:</span>
                    <div className="xl:w-100">
                        <select data-te-select-init className="ml-3" onChangeCapture={handleSource}>
                            <option value="openai" data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp">
                                OpenAI
                            </option>
                            <option value="unsplash" data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp">
                                UnSplash
                            </option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Prompt;