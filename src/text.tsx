import { useState } from 'react';

export const Comp1 = () => {
  let [count, setCount] = useState(0);

  return (
    <>
    {count}
    <button onClick={() => setCount(count + 1)}>lol</button>
    </>
  )
}
