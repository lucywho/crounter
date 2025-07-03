import Count from './count';

export default function Counter() {
  return (
    <div className='card-container'>
      <Count title={'Rows'} />
      <Count title={'Stitches'} />
      <Count title={'Pattern Repeat'} />
    </div>
  );
}
