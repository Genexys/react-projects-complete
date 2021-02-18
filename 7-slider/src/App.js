import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft, FaQuoteRight } from "react-icons/all";

function App() {
  const [dataFetch, setDataFetch] = useState([]);
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch("http://localhost:3000/people");
      return res.json();
    }
    fetchPeople().then((data) => {
      setDataFetch(data);
    })
  }, [])

  useEffect(() => {
    setPeople(dataFetch)

    let lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex)
    }
    
    if (index > lastIndex) {
      setIndex(0)
    }

  },[index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)

    return () => clearInterval(slider)
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide'
          }

          return <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
        <button className="next" onClick={() => setIndex(index + 1)}><FiChevronRight/></button>
      </div>
    </section>
  );
}

export default App;
