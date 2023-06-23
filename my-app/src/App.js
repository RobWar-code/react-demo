import './App.css';
/*
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps.js';
import StatefulGreeting from './Components/StatefulGreeting.js';
import StatefulGreetingWithCallback from './Components/StatefulGreetingWithCallback.js';
import StatefulGreetingWithPrevState from './Components/StatefulGreetingWithPrevState.js';
*/
import NavBarForm from './Components/NavBarForm.js';
import Mounted from './Components/Mounted.js';
import RenderingLists from './Components/RenderingLists.js';
import ComponentUpdated from './Components/ComponentUpdated.js';
import MouseMove from './Components/MouseMove.js'
import LifeCyclesCWU from './Components/LifeCyclesCWU.js';

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
      <Mounted />
      <ComponentUpdated />
      <RenderingLists />
      <MouseMove />
      <LifeCyclesCWU />
    </div>
  );
}

export default App;
