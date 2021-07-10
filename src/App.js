import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Top_block from './components/Top_block'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import Exp from './components/Exp';
import Skills from './components/Skills';
import Work_exp from './components/Work_exp';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Price_card from './components/Price_card';
import Testimony from './components/Testimony';
import Team from './components/Team';
import Contact_form from './components/Contact_form';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
     <Header/>
     <Top_block/>
     <Exp/>
     <Skills/>
     <Work_exp/>
     <Banner/>
     <Portfolio/>
     <Banner/>
     <Price_card/>
     <Testimony/>
     <Team/>
     <Contact_form/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
