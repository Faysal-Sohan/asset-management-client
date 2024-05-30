import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Home/Navbar/NavigationBar";

const Main = () => {
    return (
        <div className="container mx-auto">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;