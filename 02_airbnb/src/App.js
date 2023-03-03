import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  // map over imported array (usually API call) top access its properties to create an Array of Card components
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        // passes in ALL properties; need to be accessed differently in Card
        item={item}             
        // EVEN SHORTER "SPREAD" SYNTAX (he doesn't like it): {...item} SPREAD item properties; access as below without item
        // img={item.coverImg}
        // rating={item.stats.rating} etc.
      />
    )
  })
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
    </div>
  )
}
