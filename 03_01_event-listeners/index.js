function App() {	
    function handleClick() {
        console.log("hi")
    }

    function handleOnMouseOver() {
        // do something
    }

    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={handleOnMouseOver} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)