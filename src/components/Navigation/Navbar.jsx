import "./Navbar.scss"
export default function Navbar() {
    const navItem = [
        { id: 1, name: "Home" },
        { id: 2, name: "About Us" },
        { id: 3, name: "Contact Us" },
        { id: 4, name: "Help" }
    ]
    return (<>
        <div className="container">
            <nav className="navBar">
                <div className="logo"><span>FitApp</span></div>
                <div className="navItem">
                    <ul className="navList">
                        {navItem.map((item) => (
                            <li key={item.id} className="navListItem"><a href="#">{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    </>);
}