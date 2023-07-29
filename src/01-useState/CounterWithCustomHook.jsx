import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter,decrement,increment,reset} = useCounter(0);

  return (
    <>
        <h2>Counter {counter}</h2>

        <button className="btn bg-info me-2 fs-3" onClick={() => increment(2)}>+2</button>
        <button className="btn bg-info me-2 fs-3" onClick={reset}>reset</button>
        <button className="btn bg-info me-2 fs-3" onClick={() => decrement(2)}>-2</button>

    </>
  )
}
