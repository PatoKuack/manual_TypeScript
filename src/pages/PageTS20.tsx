export const PageTS20 = () => {
  return (
    <>
    <section>
      <h2>Tipos para referencias.</h2>
      {/* Tipos para referencias. */}
      <div>
        <p>Las referencias en react, permiten acceder a un nodo del DOM en tiempo de ejecución, useRef es el hook que se utiliza para utilizar las referencias.</p>
        <p>El tipo de dato que useRef() devuelve por defecto un valor undefined, así que se debe inicializar con un valor si no se desea mandar un undefined. En el caso de elementos como &#60;img/&#62;, solo aceptan recibir valores de tipo null o elementos de HTML, por lo que narcaría un error si recibe un undefined porque ambos tipos de dato no coincidirían. Para solucionar este problema, se inicializa la referencia con un valor null.</p>
        <code className="code-block">
          export default function myFunc(&#123;image&#125;: Props): JSX.Element &#123;<br/>
          <span className="opacity-70 line-through">
            &emsp;// const node = useRef();<br/>
            &emsp;// const node = useRef&#60;HTMLImageElement&#62; ();<br/>
          </span>
          &emsp;const node = useRef&#60;HTMLImageElement&#62; (null);<br/>
          &emsp;return (<br/>
          &emsp;&emsp;&#60;img ref=&#123;node&#125; src=&#123;image&#125; /&#62;<br/>
          &emsp;)<br/>
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
