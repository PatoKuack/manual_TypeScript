export const PageTS19 = () => {
  return (
    <>
    <section>
      <h2>Eventos.</h2>
      {/* Eventos. */}
      <div>
        <p>Para utilizar los tipos de datos correctos para eventos, o sea, las librerias del DOM que permiten trabajar con toda la web API del DOM, se necesitan agregar, si es que no existen ya, las siguientes librerías en el archivo <b>tsconfig.json</b>:</p>
        <code className="code-block">
          &#123;<br/>
          &emsp;"compilerOptions": &#123;<br/>
          &emsp;&emsp;...<br/>
          &emsp;&emsp;<b className="text-lg">"lib": ["DOM", "DOM.Iterable", "ESNext"],</b><br/>
          &emsp;&emsp;...<br/>
          &emsp;&#125;,<br/>
          &emsp;...<br/>
          &#125;
        </code>
        <p>En algunos editores de código se puede inspeccionar el tipo de evento que se puede utilizar colocando el puntero del mouse encima de una propiedad como por ejemplo, un onClick, así se muestra el tipo que se espera y el tipo que se debe utilizar.</p>
        <p>Se puede dar clic derecho sobre las propiedades y seleccionar en el menú <i>"Go to definition"</i> para abrir el archivo en donde se define como esta construida la propiedad, de igual manera se puede presionar <i>ALT</i> y al mismo tiempo dar clic izquierdo sobre la propiedad. Se puede ir más profundo en la definición de la propiedad para conocer todo sobre la constitución de las propiedades y sus tipos.</p>
        <p>En la documentación de TypeScript se utilizan mucho las primeras letras en mayúscula de las palabaras para referenciarlas, ejemplo: &#60;T&#62; para &#60;Type&#62; o &#60;S&#62; para &#60;String&#62;.</p>
        <p>Poe ejemplo, el tipo de datos de la propiedad onClick de un botón, es React.MouseEventHandler&#60;HTMLButtonElement&#62; o undefined. Esto significa que se pueden utilizar estos tipos de datos para especificar el tipo de datos que se produce en el callback de escuchador de eventos</p>
        <p>Antes de colocar los tipos de datos, se necesitan ser importados, ejemplo: <u>import type &#123; MouseHandlerEvent &#125; from "react";</u>; si se coloca una coma y se presiona <i>CTRL + space</i>, se muestran las opciones de los tipos de datos</p>
        <code className="code-block">
        import &#123; useState &#125; from "react";<br/>
        <b>import type &#123; MouseHandlerEvent &#125; from "react";</b><br/><br/>

        <span className="opacity-70">// generar id única</span><br/>
        const randomNumId = () =&#62; Math.floor(Math.random() * 123) + 1;<br/>
        const randomStrId = () =&#62; Math.random().toString(36).substr(2, 9);<br/><br/>

        type ImageItem = &#123; idImg: string, urlImg: string &#125;;<br/><br/>

        export const myFunction = (): JSX.Element =&#62; &#123;<br/>
        &emsp;const [images, setImages] = useState&#60;Array&#60;ImageItem&#62;&#62;([]);<br/>
        &emsp;const addNewImg: <b>React.MouseEventHandler&#60;HTMLButtonElement&#62;</b> = (event) =&#62; &#123;<br/>
        &emsp;&emsp;const newImageItem: ImageItem = &#123;<br/>
        &emsp;&emsp;&emsp;idImg: randomStrId(),<br/>
        &emsp;&emsp;&emsp;urlImg: `https://image/$&#123;randomNumId()&#125;.jpg`<br/>
        &emsp;&emsp;&#125;<br/>
        &emsp;&emsp;setImages([...images, newImageItem]);<br/>
        &emsp;&#125;<br/>
        &emsp;return (<br/>
        &emsp;&emsp;&#60;button onClick=&#123;addNewImg&#125;&#62;Add new image&#60;/button&#62;<br/>
        &emsp;&emsp;<span className="opacity-70">// impresión de imagenes</span><br/>
        &emsp;&emsp;&#123;images.map((&#123; idImg, urlImg &#125;) =&#62; (<br/>
        &emsp;&emsp;&emsp;&#60;div key=&#123;idImg&#125;&#62;<br/>
        &emsp;&emsp;&emsp;&emsp;&#60;image src=&#123;urlImg&#125;/&#62;<br/>
        &emsp;&emsp;&emsp;&#60;/div&#62;<br/>
        &emsp;&emsp;))&#125;<br/>
        &emsp;)<br/>
        &#125;
        </code>
        <p>En el ejemplo anterior, la función addNewImg toma un argumento de tipo React.MouseEventHandler&#60;HTMLButtonElement&#62;". Esto permite acceder a las propiedades del evento (como event.target o event.preventDefault()) de manera segura y precisa, sin tener que utilizar tipos de datos genéricos como any.</p>

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
