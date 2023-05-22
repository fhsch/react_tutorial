function Profile(props) {
    return (
        <div>
            {props.name && <h3>{props.name}'s trip {props.year}</h3>}
            <div><img src={`images/${props.img}.jpg`} height="200" alt="pic" /></div>
            <h4>Visited countries:</h4>
        </div>
    )
}

export default Profile