export const PageTS14 = () => {
  return (
    <>
    <section>
      <h2>Instalación.</h2>
      {/* Instalación. */}
      <div>
        <h3>Vite.</h3>
        <p>Cuando se instala React por medio de <b>Vite</b>, Vite pregunta en la instalación si se desea trabajar con TypeScript o con React y si se selecciona la opción de trabajar con TypeScript, se instala lo necesario para trabajar con TypeScript, aunque se puede agregar lo siguiente:</p>
        <code className="code-block">
          <p className="text-center">tsconfig.json</p>
          "noImplicitAny": true,<br/>
          "noImplicitReturns": true,
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
      </section>
    </footer>
    </>
  );
}
