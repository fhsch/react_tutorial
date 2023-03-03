export default function Entry (props) {
    return (
        <div className="entry">
            <img className="entry--img" src={props.item.imageUrl} alt="Mt. Fuji" />
            <div className="entry--content">
                <span><img src="pin.png" alt="pin"/></span>
                <span className="entry--location">{`${props.item.location}`.toUpperCase()}</span>
                <span className="entry--googleMapsUrl"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                <h1 className="entry-title">{props.item.title}</h1>
                <p className="entry--bold">From {props.item.startDate} - {props.item.endDate}</p>
                <p className="entry--description">{props.item.description}</p>
            </div>
        </div>
    )
}