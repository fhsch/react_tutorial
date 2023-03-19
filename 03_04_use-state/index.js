function App() {	
    const [result, setResult] = React.useState("Yes")

    function handleClick() {
        setResult("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{result}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)