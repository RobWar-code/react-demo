import './App.css';
/*
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps.js';
import StatefulGreeting from './Components/StatefulGreeting.js';
import StatefulGreetingWithCallback from './Components/StatefulGreetingWithCallback.js';
import StatefulGreetingWithPrevState from './Components/StatefulGreetingWithPrevState.js';
*/
import NavBarForm from './Components/NavBarForm.js';
import RenderingLists from './Components/RenderingLists.js'

function App() {
  return (
    <div className="App">
      {/*
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
      <StatefulGreeting message="from Stateful Class" />
      <StatefulGreetingWithCallback message="from StatefulGreetingWithCallback" />
      <StatefulGreetingWithPrevState message="from StatefulGreetingWithPrevState" />
      */}
      <NavBarForm />
      <RenderingLists />
    </div>
  );
}

export default App;
