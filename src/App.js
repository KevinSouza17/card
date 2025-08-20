import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App">
      <Header />

      <Cartao
        foto="https://lncimg.lance.com.br/uploads/2021/02/17/602d15fb5b906.jpeg"
        nome="Cruz"
        profissao="Fisiculturista"
        descricao="Eu sou o trem...Bolona"
      />

      <Footer />
    </div>
  );
}

export default App;

