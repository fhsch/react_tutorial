// In tutorial in another file
const jokes = [
    {
        setup: "What's green, has six holes, and if it falls on your head from a tree you're dead?",
        punchline: "A pool table.",
    },
    {
        setup: "Who's your mommy?",
        punchline: "Punchline",
    },
    {
        setup: "Setup 3???",
        punchline: "Punchline 3",
    }
]

function App() {	
    const jokeElements = jokes.map(joke => {
        return (
            <Joke
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })	

	return (
        <div>
            {jokeElements}
        </div>
    )
}

function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    // practice: he did it in separate file with "messages"
    const [messages, setMessages] = React.useState(["hi,", "no no"])

    function showPunchline() {
        setIsShown(previousIsShown => !previousIsShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={showPunchline}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            {
                messages.length === 0 ?
                <h1>You're all caught up</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
            }
            <hr />
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)