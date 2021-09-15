import { useState } from 'react';

export const Comp2 = () => {
  let [count, setCount] = useState(1);

  return (
    <>
    ds
    {count}
    <button onClick={() => setCount(count + 1)}>lol</button>
    </>
  )
}
