// boxes arra (in tut in another file)
const boxes = [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]

function App() {
    const [squares, setSquares] = React.useState(boxes)   

    // function to change state for individual boxes in Cpmponent (needs id as argument)
    function toggle(id) {
        setSquares(prevSquares => {
            // returns new array with same length of the original
            return prevSquares.map((square) => {
                // returns new squares for each item in array; 'on' flipped only for matching id, other properties of object (square in list) unchanged
                return square.id === id ? {...square, on: !square.on} : square
            })      
        })
    }

    const squareElements = squares.map(square => (
        <Box 
            on={square.on}
            // passes down id to use it in function for each box individually (=/= key)
            id={square.id}
            key={square.id}
            toggle={toggle}
            // alternative without passing id would be to pass it with toggle function that remembers its own id
            // toggle={() => toggle(square.id)}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div
            style={styles}
            className="box"
            // run own empty function ()=> instead of using it as a variable allows passing of the id (yeah ...)
            onClick={()=>props.toggle(props.id)}>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)