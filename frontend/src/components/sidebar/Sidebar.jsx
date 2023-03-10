import "./sidebar.css"
import { NavLink } from "react-router-dom";
function SideBar() {
    return ( 
        <div className="sidebar rounded-md shadow-xl h-screen w-1/5 bg-blue-700">
            <ul>
                <li>
                    <NavLink to="/">Image Generate</NavLink>
                </li>
                <li>
                    <NavLink to="/textCompletion">Text Completion</NavLink>
                </li>
            </ul>
        </div>
     );
}

export default SideBar;