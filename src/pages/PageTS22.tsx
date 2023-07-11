export const PageTS22 = () => {
  return (
    <>
    <section>
      <h2>Componentes extendidos.</h2>
      {/* Componentes que extienden elementos DOM. */}
      <div>
        <h3>Componentes que extienden elementos DOM.</h3>
        <p>Se pueden extender los elementos que uno crea para que obtengan propiedades que aceptaría un elemento general como &#60;img&#62; o &#60;button&#62;, es decir, se puede crear un componente que reciba las propiedades de una etiqueta &#60;img&#62; como src=&#123;&#125; o title=&#123;&#125; más alguna otra propiedad que se le desee agregar.</p>
        <p>Primero se debe elegir una etiqueta de la que se quiera copiar sus propiedades, se busca en el archivo de definiciones su tipado para importar su tipo. En el archivo de definiciones se indica el origen de la definición, suelen tener de origen "react".</p>
        <p>Después se define el tipado del componente y se colocan las propiedades de la etiqueta que se desean integrar al componente, por ejemplo: &#123; onClick, title &#125;. En vez de colocar propiedad por propiedad, se le pueden colocar todas las de la etiqueta con el spread operator, ejemplo &#123; ...variable &#125;, en esa variable del spread operator se guardarán todas las posibles propiedades de la etiqueta en forma de objeto.</p>
        <p>Por último se coloca ese spread operator con la variable que se le asignó, en las propiedades del elemento retornado, ejemplo: &#123; ...variable&#125;</p>
        <code className="code-block">
          <b className="text-lg">import type &#123; ImgHTMLAttributes &#125; from "react";</b><br/><br/>
          type ComponentProps = &#123; src: string &#125;;<br/>
          <b className="text-lg">type ImageNative = ImgHTMLAttributes&#60;HTMLImageElement&#62;;</b><br/>
          type <u>Props</u> = ComponentProps && <b className="text-lg">ImageNative</b>;<br/><br/>
          export default function MyImg( &#123; src, <u>...imgProps</u> &#125;: <u>Props</u> ):JSX.Element &#123;<br/>
          &emsp;...<br/>
          &emsp;return(<br/>
          &emsp;&emsp;&#60;img<br/>
          &emsp;&emsp;&emsp;ref=&#123;node&#125;<br/>
          &emsp;&emsp;&emsp;src=&#123;src&#125;<br/>
          &emsp;&emsp;&emsp;<u>&#123;...imgProps&#125;</u><br/>
          &emsp;&emsp;/&#62;<br/>
          &emsp;);<br/>
          &#125;
        </code>
        <p>La forma de utilizar el componente extendido es de una manera normal, con su debida importación y mandandole las props que se utilizan y definiendo las propiedades.</p>
        <code className="code-block">
          import &#123; MyImg &#125; from "../components/MyImg";<br/>
          ...<br/>
          &#60;MyImg src=&#123;https://...&#125; onClick=&#123;...&#125; /&#62;
        </code>
        <p>Entre más parecido sea el componente extendido al componente nativo (o etiqueta) del que se este copiando sus propiedades, más fácil será su uso por otros compañeros de un proyecto.</p>
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
