import "./sidebar.css"
import { NavLink } from "react-router-dom";
function SideBar() {
    return ( 
        <div className="sidebar rounded-xl shadow-xl h-screen w-1/5 bg-blue-700">
            <ul>
                <li>
                    <NavLink to="/">Image Generate</NavLink>
                </li>
                <li>
                    <NavLink to="/textCompletion">Text Completion</NavLink>
                </li>
                <li>
                    <NavLink to="/nasa">Nasa</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/date">Today's Event</NavLink>
                </li>
            </ul>
        </div>
     );
}

export default SideBar;