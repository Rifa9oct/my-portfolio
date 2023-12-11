import Headroom from "react-headroom";
import Navbar from "../Navbar/Navbar";
import Home from "../components/Home/Home";


const Root = () => {
    return (
        <div>
            <Headroom><Navbar></Navbar></Headroom>
            <Home></Home>
        </div>
    );
};

export default Root;