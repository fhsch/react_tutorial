import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="AirBnB logo" className="nav--logo" />
        </nav>
    )
}