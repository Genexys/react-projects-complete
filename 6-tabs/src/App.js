import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
function App() {
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchTabs = async () => {
      const res = await fetch("http://localhost:3000/tabs");
      const data = await res.json();
      return data;
    }

    fetchTabs().then(data => {
      setTabs(data);
      setLoading(false)
    }).catch( err => {
      console.log(err)
    });
  }, [])

  if (loading) {
    return <section className="section loading"><h1>Loading...</h1></section>;
  }

  const { company, dates, duties, title } = tabs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((item, index) => {
            return <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((text, index) => <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"/>
            <p>{text}</p>
          </div>)}
        </article>
      </div>
    </section>
  );
}

export default App;
