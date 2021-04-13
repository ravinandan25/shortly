import Header from './components/Header';
import HeaderImage from './components/HeaderImage';
import Linkgen from './components/Linkgen';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <HeaderImage />
      </div>
      <Linkgen />
      <Footer />
    </div>
  );
}

export default App;
