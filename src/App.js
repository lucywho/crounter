import Logo from './logo';
import Name from './name';
import Counter from './counter';
import ResetAll from './ResetAll';
import { CounterProvider } from './counterContext';

export default function App() {
  return (
    <CounterProvider>
      <div className='app-container'>
        <div className='strapline'>
          <Logo />
          <Name />
        </div>
        <div className='counter-container'>
          <Counter />
          <ResetAll />
        </div>
      </div>
    </CounterProvider>
  );
}
