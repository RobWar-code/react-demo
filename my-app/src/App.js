import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps.js';
import StatefulGreeting from './Components/StatefulGreeting.js'

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
      <StatefulGreeting />
    </div>
  );
}

export default App;
