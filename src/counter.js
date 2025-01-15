import React from 'react';
import Count from './count';

export default function Counter() {
  return (
    <>
      <Count title={'Rows'} />
      <Count title={'Stitches'} />
      <Count title={'Pattern Repeat'} />
    </>
  );
}
