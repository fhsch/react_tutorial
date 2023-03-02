// In tutorial in another file
const jokes = [
    {
        setup: "Setup 1",
        punchline: "Punchline 1",
    },
    {
        setup: "Setup 2",
        punchline: "Punchline 2",
    },
    {
        setup: "Setup 3",
        punchline: "Punchline 3",
    }
]

function Joke(props) {
    return (
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}

// All in here because fuck creating a react app every time or working on scrimba
function App() {	
    // map over imported array
    const jokeElements = jokes.map(joke => {
        return (
            <Joke
                // two ways to access object properties
                setup={joke.setup}
                punchline={joke["punchline"]}
            />
        )
    })	

	return (
        <div>
            {jokeElements}
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)