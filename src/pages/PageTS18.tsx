export const PageTS18 = () => {
  return (
    <>
    <section>
      <h2>Mínimas representaciones.</h2>
      {/* Mínimas representaciones. */}
      <div>
        <p>Es común utilizar las mínimas representaciones que se tienen en un contexto.</p>
        <p>Ejemplo usando una representación general:</p>
        <code className="code-block">
          type ImageItems = Array&#60;&#123; id: string; url: string &#125;&#62;<br/>
          const myFunc  = () =&#62; &#123;<br/>
          &emsp;const [images, setImages] = useState&#60;ImageItems&#62;([]);
          &#125;
        </code>
        <p>Ejemplo usando una representación mínima:</p>
        <code className="code-block">
          type ImageItem = &#123; id: string; url: string &#125;<br/>
          const myFunc  = () =&#62; &#123;<br/>
          &emsp;const [images, setImages] = useState&#60;Array&#60;ImageItem&#62;&#62;([]);<br/>
          &#125;
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
