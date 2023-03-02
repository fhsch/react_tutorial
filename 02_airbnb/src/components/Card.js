// import star from "./images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`images/${props.img}`} alt="pic" className="card--img" />
            <div className="card--stats">
                <img src="images/star.png" alt="pic" className="card--star" /> 
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / persons</p>
        </div>
    )
}