function TextResult({ prompt, result }) {
    return (
        <div className="text-result p-2">
            {
                prompt && (
                    <div className="prompt-container bg-white m-1 p-2 rounded-lg shadow-lg">
                        <p>{prompt}</p>
                    </div>
                )
            }
            {
                result && (
                    <div className="result-container bg-blue-700 text-white m-3 p-2 rounded-md shadow-lg">
                        <p>{result}</p>
                    </div>
                )
            }

        </div>
    );
}

export default TextResult;