import './App.scss';
import Logo from './components/Logo/Logo';
import Call from './components/Call/Call';
import logoImage from './assets/rimac-logo.svg';
import VehicularTracking from './components/VehicularTracking/VehicularTracking';
import MyForm from './components/MyForm/MyForm';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      <div className="wrap">
        <header>
          <Logo logoSrc={logoImage} logoAlt="Rimac"></Logo>
          <Call text="Llámanos" numberCode="014116001" numberText="(01) 411 6001" preText="¿Tienes alguna duda?"></Call>
        </header>
        <div className="half-container">
          <VehicularTracking></VehicularTracking>
          <MyForm></MyForm>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
