import './App.css';

import Question from './components/Question';
import { useState } from 'react';

function App() {
  const questions = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"]
  
  const [index, setIndex] = useState(0)
  
  const previousHandler = () => {
  setIndex(ind=>ind-1)
  }
  const nextHandler = () => {
    setIndex(ind=>ind+1)
  }
  
  const prevDisabled = index === 0;
  const nextDisabled = index === questions.length - 1;
  return (
    <div className="container" >
      <Question questionId={questions[index]} />
      <div className='btn'>
        <button id='prevBtn' className='button' onClick={()=>previousHandler()} disabled={prevDisabled}>Previous</button>
        <button id='nextBtn' className='button' onClick={()=>nextHandler()} disabled={nextDisabled}>Next</button>
      </div>
    </div>
  );
}

export default App;
