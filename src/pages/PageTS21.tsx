export const PageTS21 = () => {
  return (
    <>
    <section>
      <h2>Observables.</h2>
      {/* Observadores. */}
      <div>
        <p>Un observable sirve para obtener datos de elementos que se encuentran en el DOM, por ejemplo, saber en que momento un elemento esta dentro del viewport.</p>
        <code className="code-block">
          import &#123; useRef, useEffect, useState &#125; from "react";<br/><br/>
          <span className="opacity-70">// se indican las propieades que se recibirán.</span><br/>
          type <u>Props</u> = &#123; image: string; &#125;;<br/><br/>
          export function componentImg(&#123; image &#125;: <u>Props</u>): JSX.Element &#123;<br/>
          &emsp;const node = useRef&#60;HTMLImageElement&#62;(null);<br/>
          &emsp;<span className="opacity-70">// src tendrá por default una imagen gris super-comprimida.</span><br/>
          &emsp;const [src, setSrc] = useState(<br/>
          &emsp;&emsp;"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="<br/>
          &emsp;);<br/><br/>
          &emsp;<span className="opacity-70">// el observador se utiliza solo del lado del cliente y para esto se usa useEffect.</span><br/>
          &emsp;useEffect(() =&#62; &#123;<br/>
          &emsp;&emsp;<span className="opacity-70">// se usa un observador para saber cuando un elemento aparezca en el viewport.</span><br/>
          &emsp;&emsp;<span className="opacity-70">// este observador necesita un callback: IntersectionObserver(callback).</span><br/>
          &emsp;&emsp;const observer = new <b className="text-lg">IntersectionObserver((entries)</b> =&#62; &#123;<br/>
          &emsp;&emsp;&emsp;entries.forEach((entry) =&#62; &#123;<br/>
          &emsp;&emsp;&emsp;&emsp;<span className="opacity-70">// si la entrada no sale en el viewport o aún no existe el nodo referenciado.</span><br/>
          &emsp;&emsp;&emsp;&emsp;if (!entry<b className="text-lg">.isIntersecting</b> || !node.current) &#123;<br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;<span className="opacity-70">// sigue apareciendo la imagen gris (src).</span><br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;return;<br/>
          &emsp;&emsp;&emsp;&emsp;&#125;<br/>
          &emsp;&emsp;&emsp;&emsp;<span className="opacity-70">// sino se muestra la imagen.</span><br/>
          &emsp;&emsp;&emsp;&emsp;setSrc(image);<br/>
          &emsp;&emsp;&emsp;&#125;);<br/>
          &emsp;&emsp;&#125;);<br/>
          &emsp;&emsp;if (node.current) &#123;<br/>
          &emsp;&emsp;&emsp;<span className="opacity-70">// se pide al observador que observe al nodo referido.</span><br/>
          &emsp;&emsp;&emsp;observer.observe(node.current);<br/>
          &emsp;&emsp;&#125;<br/>
          &emsp;&emsp;return () =&#62; &#123;<br/>
          &emsp;&emsp;&emsp;<span className="opacity-70">// se pide al observador que si es que se desmonta, se desconecte del observador.</span><br/>
          &emsp;&emsp;&emsp;observer.disconnect();<br/>
          &emsp;&emsp;&#125;;<br/>
          &emsp;&#125;, [image]);<br/><br/>
          &emsp;return (<br/>
          &emsp;&emsp;&#60;img<br/>
          &emsp;&emsp;&emsp;ref=&#123;node&#125;<br/>
          &emsp;&emsp;&emsp;src=&#123;src&#125;<br/>
          &emsp;&emsp;&emsp;className="mx-auto rounded-md bg-gray-300"<br/>
          &emsp;&emsp;/&#62;<br/>
          &emsp;);<br/>
          &#125;
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">Intersección con observador.</a>
      </section>
    </footer>
    </>
  );
}
