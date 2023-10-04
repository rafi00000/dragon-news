import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="container mx-auto py-5">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;