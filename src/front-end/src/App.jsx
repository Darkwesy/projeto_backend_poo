import './App.css';
import FormularioCadastro from './components/FormCadastro/FormCadastro';
import FormularioLogin from './components/FormLogin/FormLogin';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <FormularioLogin />
        <FormularioCadastro />
      </div>
    </div>
  );
}

export default App;
