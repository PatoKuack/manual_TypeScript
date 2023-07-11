export const PageTS15 = () => {
  return (
    <>
    <section>
      <h2>Componentes.</h2>
      {/* Componentes. */}
      <div>
        <p>La forma en que se denota un archivo que es TypeScript con React es con la terminación <b>.tsx</b></p>
        <p>Una función típica de <b>JSX</b> se ve así:</p>
        <code className="code-block">
          <span className="opacity-70">// se exporta una función que retorna un elemento.</span><br/>
          export const myFunction = () =&#62; &#123;<br/>
          &emsp;return &#60;img /&#62;<br/>
          &#125;
        </code>
        <p>Una función típica de <b>TSX</b> se ve así:</p>
        <code className="code-block">
          <span className="opacity-70">// se indica que la función retornará un elemento JSX.</span><br/>
          export const myFunction = ()<b className="text-lg">: JSX.Element</b> =&#62; &#123;<br/>
          &emsp;return &#60;img /&#62;<br/>
          &#125;
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/" target="_blank" rel="noopener noreferrer">Typing Component Props.</a>
      </section>
    </footer>
    </>
  );
}
