function Country(props) {
let winner
if (props.item.rank === 1) {
        winner="CURRENT TOP COUNTRY"
    }

    return (
        <div>
            <p>{props.id}</p>
            <p>Name: {props.item.name}</p>
            <p>Rank: {props.item.rank}</p>
            <p className="winner">{winner}</p>
            <br />
        </div>
    )
}

export default Country