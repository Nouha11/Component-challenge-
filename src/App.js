import './App.css';
import Navbar  from './components/navbar';
import Description from './components/description';
import Title from './components/title';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Description />
        <div className="Undercont">
        <Title />
        <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
