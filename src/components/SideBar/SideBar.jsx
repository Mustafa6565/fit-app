import { useState } from "react";
import "./SideBar.scss"

export default function SideBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(true)
    function hamburgerToggle() {
        setHamburgerOpen(!hamburgerOpen)
    }
    const sideItem = [
        { id: 1, name: "Home", icon: "fa-solid fa-house" },
        { id: 2, name: "About Us", icon: "fa-solid fa-users" },
        { id: 3, name: "Contact Us", icon: "fa-solid fa-address-book" },
        { id: 4, name: "Help", icon: "fa-solid fa-info" }
    ]
    return (
        <>
            <div className="container">
                <aside className={`sideBar ${hamburgerOpen && "sideBarHide"}`}>
                    <div className="logo">FitApp  <i onClick={hamburgerToggle} class="fa-solid fa-bars"></i></div>
                    <div className="sideItem">
                        <ul className="sideList">
                            {sideItem.map((item) => (
                                <li key={item.id} className="sideListItem"><a href="#">{item.name} <i className={item.icon}></i></a></li>
                            ))}
                        </ul>
                    </div>

                </aside>
            </div>
        </>
    );
}