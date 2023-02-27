import pic from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={pic} alt="pic" className="card--img" />
            <div className="card--stats">
                <img src={star} alt="pic" className="card--star" /> 
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / persons</p>
        </div>
    )
}