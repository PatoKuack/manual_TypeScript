function PageTS4() {
  return (
    <>
    <section>
      <h2>Bugs.</h2>
      <p>VSC tiene una función para activar el analisis de los errores en <u>archivos JavasSript (<b>.js</b>)</u>. Simplemente se coloca como primera línea de código el fragmento:</p>
      <code className="code-block">
        <a href="https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript" target="_blank" rel="noopener noreferrer">//@ts-check</a>
      </code>
      <p>Los errores se mostrarán subrrayados con una franja roja.</p>
      <p>Con la extensión <a href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens" target="_blank" rel="noopener noreferrer">ErrorLens</a> se aprovecha mejor el analisis de errores.</p>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://francocarrara.notion.site/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81" target="_blank" rel="noopener noreferrer">Apuntes de un compañero I.</a>
      </section>
    </footer>
    </>
  );
}

export { PageTS4 }