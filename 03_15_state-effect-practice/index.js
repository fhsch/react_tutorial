function App() {

    const [show, setShow] = React.useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}

function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return () => {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)