export const PageTS17 = () => {
  return (
    <>
    <section>
      <h2>Estados.</h2>
      {/* Estados. */}
      <div>
        <p>La forma común de usar estados en JSX es:</p>
        <code className="code-block">
          import &#123;useState&#125; from 'react';<br/><br/>
          const myFunc  = () =&#62; &#123;<br/>
          &emsp;const [images, setImages] = useState([]);<br/>
          &#125;
        </code>
        <p>Pero la forma en que se suele utilizar en TSX es:</p>
        <code className="code-block">
          'use client';<br/>
          import &#123;useState&#125; from 'react';<br/><br/>
          const myFunc  = () =&#62; &#123;<br/>
          <span className="opacity-70">// se indica que el estado contendrá un array de strings.</span><br/>
          &emsp;const [images, setImages] = useState<b className="text-lg">&#60;string[]&#62;</b>([]);<br/>
          <span className="opacity-70">// también se puede colocar useState&#60;Array&#60;string&#62;&#62;([])</span><br/>
          &#125;
        </code>
        <p>En la versión de Next.js (v13). Todos los componentes por defecto son ServerComponents, por lo que si se quieren usar hooks que utilicen API del navegador, como useState, se debe colocar <b>'use client';</b> en la primera línea del archivo en dónde se encuentra dicho componente.</p>
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
