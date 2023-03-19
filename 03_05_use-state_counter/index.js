function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        // setCount(count + 1) works, but not best practice
        setCount(function(prevCount) {
            return prevCount + 1
        })
    }

    function subtract() {
        // setCount(count - 1) works, but not best practice
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)