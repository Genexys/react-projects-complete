import React, {useState, useEffect} from 'react';
import Loader from "./Loader";
import Tours from "./Tours";

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:3000/tours');
            const tours = await res.json()
            setTours(tours);
            setLoading(false);
        } catch (e) {
            console.error(e.message, e.status)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const removeTour = id => {
      const newListTour = tours.filter(tour => tour.id !== id)
      setTours(newListTour)
    }

    if (loading) {
        return (
            <main>
                <Loader/>
            </main>
        )
    }

  if (tours.length === 0) {
    return (
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button onClick={fetchData} className="btn">Refresh</button>
          </div>
        </main>
    )
  }

    return (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
