function PageTS1() {
  return (
    <>
    <section>
      <h2>TypeScript</h2>
      <p>TypeScript es un analizador de código estatico, ofrece feedback mientras se crea el código evitando mandar errores a producción disminuyendo la cantidad de bugs.</p>
      <h3>¿Como se pueden encontrar errores?</h3>
      <p>En el libro Software Engineering at Google lo dividen en distintas etapas:</p>
      <h4>Static analysis</h4>
      <ul>
        <li>Corre en el editor.</li>
        <li>Puede encontrar typos, llamados incorrectos a funciones.</li>
        <li>Nos permite autocompletar código.</li>
      </ul>
      <h4>Unit Tests</h4>
      <ul><li>En pocos segundos nos permiten verificar si nuestro código hace lo que pensamos que hace.</li></ul>
      <h4>Integration tests</h4>
      <ul>
        <li>Toma unos minutos validar si nuestro sistema funciona.</li>
        <li>Podemos encontrar distintos casos límite.</li>
      </ul>
      <h4>Code review</h4>
      <ul><li>Toma algunas horas validar que estamos siguiendo las prácticas y normas de nuestro equipo.</li></ul>
    </section>
    </>
  );
}

export { PageTS1 }