//rsc es para crear componentes funcionales

const TituloPrincipal = (props) => {
// aqui va la logica

  return (
    
    <>
    {/* aqui va el maquetado y muy poca logica */}
      <h1>Proyecto contador - {props.codigoComision}</h1>
      <hr />
    </>
  );
};

export default TituloPrincipal;
