import Contador from "./components/Contador";
import Subtitulo from "./components/Subtitulo";
import TituloPrincipal from "./components/TituloPrincipal";
//para importar las hojas de estilo
import './style.css'

function App() {
  //aqui va la mayoria de la logica
  const comision = 'c6i';

  return (
    <>
      {/* <TituloPrincipal></TituloPrincipal> */}
      <TituloPrincipal codigoComision={comision} estado={true} />
      <Subtitulo></Subtitulo>
      <Contador></Contador>
   </>
  );
}

export default App;
