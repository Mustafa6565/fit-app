import Navbar from "../../components/Navigation/Navbar";
import SideBar from "../../components/SideBar/SideBar";

export default function Content() {
    return (
        <div className="container">
            <Navbar />
            <SideBar />
        </div>
    );
}