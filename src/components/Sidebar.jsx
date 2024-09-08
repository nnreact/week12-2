import { NavLink } from "react-router-dom"
import { layoutContext } from "../App";
import { useContext } from "react";

function Sidebar() {


    const { collapsed, setCollapsed } = useContext(layoutContext);

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                    {/* <Link to="/">Home</Link> */}
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                    {/* <Link to="/about">About</Link> */}
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                    {/* <Link to="/contact">Contact</Link> */}
                </li>
                <li>
                    <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar