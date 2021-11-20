import Counter from './counter/Counter.js';
import { CounterContextProvider } from './CounterData.js';
import CounterValue from './CounterValue';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='content-card'>
        <CounterContextProvider>
          <Counter />
          <CounterValue />
        </CounterContextProvider>
      </div>
    </div>
  );
}

export default App;
