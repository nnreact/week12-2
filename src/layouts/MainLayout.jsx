import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useContext } from "react";
import { layoutContext } from "../App";

function MainLayout() {

    const { collapsed } = useContext(layoutContext);

    return (
        <>
            <Sidebar />
            <div className={`body ${collapsed ? "body-collapsed" : ""}`}>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout