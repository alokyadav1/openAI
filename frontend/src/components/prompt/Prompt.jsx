import "./prompt.css"
function Prompt({ handleInputChange, handleSubmit }) {
    return ( 
        <div className="prompt w-11/12 mx-auto mt-1">
                <form>
                    <div className="input-group flex justify-center items-center">
                        <input
                            type="text"
                            className="w-full p-3"
                            onChange={handleInputChange}
                        />
                        <button className="btn text-white p-3" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
     );
}

export default Prompt;