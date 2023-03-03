import './App.css';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import data from './data'

export default function App() {
  const entries = data.map(item => {
    return (
      <Entry
        item={item}
      />
    )
  })
  return (
    <div className="container">
      <div className="page">
        <Navbar />
        {entries}
      </div>
    </div>
  );
}
