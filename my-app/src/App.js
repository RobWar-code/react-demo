import './App.css';
/*
import FunctionalGreeting from './Components/FunctionalGreeting.js';
import FunctionalGreetingWithProps from './Components/FunctionalGreetingWithProps.js';
import StatefulGreeting from './Components/StatefulGreeting.js';
import StatefulGreetingWithCallback from './Components/StatefulGreetingWithCallback.js';
import StatefulGreetingWithPrevState from './Components/StatefulGreetingWithPrevState.js';
*/
/*
import NavBarForm from './Components/NavBarForm.js';
import Mounted from './Components/Mounted.js';
import RenderingLists from './Components/RenderingLists.js';
import ComponentUpdated from './Components/ComponentUpdated.js';
import MouseMove from './Components/MouseMove.js'
import LifeCyclesCWU from './Components/LifeCyclesCWU.js';
import ControlledForm from './Components/ControlledForm.js';
import UncontrolledForm from './Components/UncontrolledForm.js';
import SearchBar from './Components/SearchBar.js';
import HooksCounter from './Components/HooksCounter';
import ControlledFormHooks from './Components/ControlledFormHooks';
import UseStateWithArrays from './Components/UseStateWithArrays';
import UseStateWithObjects from './Components/UseStateWithObjects';
import UseEffectCounter from './Components/UseEffectCounter';
import HTTPRequests from './Components/HTTPRequests'
import HTTPPosts from './Components/HTTPPosts'
*/
import HTTPHooks from './Components/HTTPHooks'

function App() {
  return (
    <div className="App">
      {/*
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
      <StatefulGreeting message="from Stateful Class" />
      <StatefulGreetingWithCallback message="from StatefulGreetingWithCallback" />
      <StatefulGreetingWithPrevState message="from StatefulGreetingWithPrevState" />
      <NavBarForm />
      <Mounted />
      <ComponentUpdated />
      <RenderingLists />
      <MouseMove />
      <LifeCyclesCWU />
      <ControlledForm />
      <UncontrolledForm />
      <SearchBar />
      <HooksCounter />
      <ControlledFormHooks />
      <UseStateWithArrays />
      <UseStateWithObjects />
      <UseEffectCounter />
      <HTTPRequests />
      <HTTPPosts />
    */}
      <HTTPHooks />
    </div>
  );
}

export default App;
