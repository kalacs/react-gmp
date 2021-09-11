import "./App.css";

import { CounterCreateElement } from "./components/CounterCreateElement";
import { CounterComponent } from "./components/CounterComponent";
import { CounterPureComponent } from './components/CounterPureComponent';

function App() {
  return (
    <>
      <CounterCreateElement />
      <CounterComponent />
      <CounterPureComponent />
    </>
  );
}

export default App;
