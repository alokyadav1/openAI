import { Close } from '@mui/icons-material';
function Error({ error, handleDeleteError }) {
    return (
        <div className="error text-white bg-red-600 p-2 rounded-lg mx-2 shadow-xl relative">
            <span className=''>{ error }</span>
            <span onClick={handleDeleteError} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2"> <Close /> </span>
        </div>
    );
}

export default Error;