import React, {useEffect, useState} from "react";
import useStateCallBack from "./useStateCallBack";
import Review from "./Review";

function App() {
    // const [index, setIndex] = useState(0);
    // const [people, setPeople] = useStateCallBack([], (newPeople) => {
    //     console.log(newPeople)
    // })
    // const [onePerson, setOnePerson] = useState({});
    //
    // useEffect(() => {
    //
    //     const fetchData = async () => {
    //
    //         const res = await fetch('http://localhost:3000/reviews');
    //         const data = await res.json();
    //
    //         setPeople([...data])
    //         console.log(people)
    //         // console.log('data---', data)
    //         // setPeople(data)
    //         // console.log('people---', people)
    //         // console.log('people[index]---', people[index])
    //         // console.log('index---', index)
    //         // setOnePerson(people[index]);
    //         // console.log('onePerson---', onePerson)
    //     }
    //
    //     fetchData();
    //
    // }, []);

    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our reviews</h2>
                    <div className="underline"></div>
                    <Review/>
                </div>
            </section>
        </main>
    );
}

export default App;
