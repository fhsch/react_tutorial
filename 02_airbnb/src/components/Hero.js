import grid from "../images/photo_grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="grid" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interative activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}