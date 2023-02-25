import { Outlet } from "react-router-dom"
import SideBar from "../components/sidebar/Sidebar"

const Layout = () => {
    return (
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
    )
}
export default Layout