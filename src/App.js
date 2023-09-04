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

  function showReset() {
    return (
      <button
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        Reset
      </button>
    );
  }

  return (
    <div className='App'>
      <div className='step'>
        <input
          type='range'
          min='1'
          max='10'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <div>Step: {step}</div>
      </div>
      <br />
      <div className='count'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type='number'
          placeholder='Enter Count...'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <br />
      <div>
        {count === 0
          ? `Today is ${today.toDateString()}`
          : count > 0
          ? `${count} days from today will be: ${updateDate()}`
          : `${Math.abs(count)} days ago was: ${updateDate()}`}
      </div>
      <br />
      <br />
      {step !== 1 || count !== 0 ? showReset() : null}
    </div>
  );
}

export default App;
