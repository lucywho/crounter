import React, { useState } from 'react';

export default function Count(props) {
  const title = props.title;

  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(1);

  let i = number;
  let x;

  function add() {
    i = number + inc;

    setNumber(i);
  }

  function minus() {
    if (i > 0) {
      i--;

      setNumber(i);
    } else {
      return;
    }
  }

  function clear() {
    i = 0;
    setNumber(i);
    x = 1;
    setInc(x);
    document.getElementById('increment').value = '';
  }

  function setIncrement() {
    x = document.getElementById('increment').value;
    x = parseInt(x);

    setInc(x);
  }

  return (
    <div className='click-container'>
      <div className='title'>{title} </div>
      {title === 'Stitches' && (
        <div className='settings'>
          <div className='st-text no-box'>
            <p>count in</p>
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
          <button className='box submit' onClick={setIncrement}>
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
