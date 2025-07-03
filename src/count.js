import { useState, useEffect } from 'react';
import { counterUtils } from './utils';
import { useCounter } from './counterContext';

export default function Count(props) {
  const title = props.title;
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(1);
  const [hasSetIncrement, setHasSetIncrement] = useState(false);

  const { registerCounter, unregisterCounter } = useCounter();

  useEffect(() => {
    const counterId = `counter-${title}`;

    const resetFunction = () => {
      const resetValues = counterUtils.reset();
      setNumber(resetValues.number);
      setInc(resetValues.increment);
      setHasSetIncrement(false);
      counterUtils.clearInput('increment');
    };

    registerCounter(counterId, resetFunction);

    return () => {
      unregisterCounter(counterId);
    };
  }, [title, registerCounter, unregisterCounter]);

  function add() {
    const newNumber = counterUtils.add(number, inc);
    setNumber(newNumber);
  }

  function minus() {
    const newNumber = counterUtils.subtract(number);
    setNumber(newNumber);
  }

  function clear() {
    const resetValues = counterUtils.reset();
    setNumber(resetValues.number);
    setInc(resetValues.increment);
    setHasSetIncrement(false);
    counterUtils.clearInput('increment');
  }

  function setIncrement() {
    const inputValue = document.getElementById('increment').value;
    if (isNaN(inputValue)) {
      alert('Please enter a number');
      return;
    }

    if (inputValue < 0) {
      alert('Please enter a positive number');
      return;
    }

    const newIncrement = counterUtils.parseIncrement(inputValue);
    setInc(newIncrement);
    setHasSetIncrement(true);
  }

  return (
    <div className='click-container'>
      <div className='title'>{title} </div>
      {title === 'Stitches' && (
        <div className='settings'>
          <div className='st-text no-box'>
            <p>{hasSetIncrement ? 'now counting in' : 'count in'}</p>
            <p>multiples of:</p>
          </div>
          <input
            id='increment'
            className='box'
            type='number'
            name='increment'
            min='0'
            placeholder='1'
          />
          <button
            className={`box submit${hasSetIncrement ? ' disabled' : ''}`}
            onClick={setIncrement}
            disabled={hasSetIncrement}
          >
            set
          </button>
        </div>
      )}
      <div className='counter'>
        <div className='box'>
          <button className='minus' onClick={minus}>
            -
          </button>
        </div>
        <div className='number box'>{number}</div>
        <div className='box'>
          <button className='plus' onClick={add}>
            +
          </button>
        </div>
      </div>
      <div className='box reset'>
        <button className='reset' onClick={clear}>
          reset
        </button>
      </div>
    </div>
  );
}
