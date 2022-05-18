import './Homepage.css'
import Navbar from './components/Navbar'
import Header from './components/Header.js';
import About from './components/About.js';

function App() {
  return (
    <div>
      <div class='backdrop'>
        <Navbar/>
        <Header/>
      </div>
      <About/>
    </div>
  );
}

export default App;
