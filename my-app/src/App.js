import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps.js';
import StatefulGreeting from './Components/StatefulGreeting.js';
import StatefulGreetingWithCallback from './Components/StatefulGreetingWithCallback.js';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
      <StatefulGreeting message="from Stateful Class" />
      <StatefulGreetingWithCallback message="from StatefulGreetingWithCallback" />
    </div>
  );
}

export default App;
