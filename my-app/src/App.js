import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
    </div>
  );
}

export default App;
