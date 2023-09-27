import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto dicen nuestros alumnos sobre MadiasCamp</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniero de Software'
          imagen='emma'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, risus nec consectetur suscipit, nulla erat molestie velit, ut scelerisque magna libero placerat ligula. Aenean ornare et quam id ornare. Vivamus eget facilisis velit. In hac habitasse platea dictumst.'/>

        <Testimonio
          nombre='Shawn Watson'
          pais='China'
          cargo='Ingeniero de Software'
          imagen='shawn'
          empresa='Tencent'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, risus nec consectetur suscipit, nulla erat molestie velit, ut scelerisque magna libero placerat ligula. Aenean ornare et quam id ornare. Vivamus eget facilisis velit. In hac habitasse platea dictumst.'/>

        <Testimonio
          nombre='Sarah Ngolo'
          pais='Angola'
          cargo='Ingeniero Back-End'
          imagen='sarah'
          empresa='Apple'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, risus nec consectetur suscipit, nulla erat molestie velit, ut scelerisque magna libero placerat ligula. Aenean ornare et quam id ornare. Vivamus eget facilisis velit. In hac habitasse platea dictumst.'/>
      </div>
    </div>
  );
}

export default App;
