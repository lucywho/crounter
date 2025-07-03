import { useCounter } from './counterContext';

export default function ResetAll() {
  const { resetAllCounters } = useCounter();

  return (
    <div className='reset-all-container'>
      <button className='reset-all' onClick={resetAllCounters}>
        Reset All
      </button>
    </div>
  );
}
