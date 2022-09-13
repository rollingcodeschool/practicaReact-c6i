import Subtitulo from "./components/Subtitulo";
import TituloPrincipal from "./components/TituloPrincipal";

function App() {
  //aqui va la mayoria de la logica
  const comision = 'c6i';

  return (
    <>
      {/* <TituloPrincipal></TituloPrincipal> */}
      <TituloPrincipal codigoComision={comision} estado={true} />
      <Subtitulo></Subtitulo>
   </>
  );
}

export default App;
