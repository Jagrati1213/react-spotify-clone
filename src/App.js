import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className="App w-full h-screen overflow-hidden flex">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
    </div>
  );
}

export default App;
