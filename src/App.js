import './styles.css';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let today = new Date();

  function updateDate() {
    return new Date(
      today.setTime(today.getTime() + count * 24 * 60 * 60 * 1000)
    ).toDateString();
  }

  return (
    <div className='App'>
      <div className='step'>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className='count'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <br />
      <div>
        {count === 0
          ? `Today is ${today}`
          : count > 0
          ? `${count} days from today will be: ${updateDate()}`
          : `${Math.abs(count)} days ago was: ${updateDate()}`}
      </div>
    </div>
  );
}

export default App;
