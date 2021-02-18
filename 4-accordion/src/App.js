import React, {useState} from "react";
import Question from "./Question";
import data from "./data";

function App() {
    const [questions, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
          <h3>question and answers about login</h3>

          <section className="info">

              {questions.map(question => <Question key={question.id} {...question}/>)}
          </section>
      </div>
    </main>
  );
}

export default App;
