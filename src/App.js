import logo from './logo.svg';
import './App.css';
import './css/banner.css';
import './css/footer.css';
import {Banner} from './components/Banner'
import {About} from './components/About'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <div className="container1">
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
