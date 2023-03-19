function App() {	
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeGoingOut() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out?</h1>
            <div className="state--value" onClick={(changeGoingOut)}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)