function NewsBox({ data, index }) {
    return (
        <div className=" rounded-md bg-slate-300 p-3 my-3">
            <p className="text-2xl">{index+1}. {data.title}</p>
            <p>Source: <span className="text-lg">{data.source.name}</span></p>
            <p>Date: <span className="text-lg opacity-80">{data.publishedAt}</span></p>
            <p>Author: <span className="text-lg">{data.author}</span></p>
            <div className="w-5/6 mx-auto">
                <img src={data.urlToImage} alt=""
                    className="rounded-lg mx-auto"
                />
            </div>
            <div className="p-5 first-letter:text-3xl">
                <p className="description">
                    {data.description}
                </p>
                <p className="content">
                    {data.content}
                </p>
            </div>
            <p>read complete article :- <a href={data.url} className="text-blue-500">{data.url}</a></p>
        </div>
    );
}

export default NewsBox;