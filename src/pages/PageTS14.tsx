export const PageTS14 = () => {
  return (
    <>
    <section>
      <h2>React.</h2>
      {/* Instalación. */}
      <div>
        <h3>Instalación.</h3>
        <p>Cuando se instala React por medio de <b>Vite</b>, Vite pregunta en la instalación si se desea trabajar con TypeScript o con React y si se selecciona la opción de trabajar con TypeScript, se instala lo necesario para trabajar con TypeScript, aunque se puede agregar lo siguiente:</p>
        <code className="code-block">
          <p className="text-center">tsconfig.json</p>
          "noImplicitAny": true,<br/>
          "noImplicitReturns": true,
        </code>
      </div>
      {/* Componentes. */}
      <div>
        <h3>Componentes.</h3>
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
      {/* Objeto props. */}
      <div>
        <h3>Objeto props.</h3>
        <p>Las props son un objeto al que se le tipean sus componentes tal como cualquier otro objeto de TypeScript.</p>
        <code className="code-block">
          <span className="opacity-70">// se indica que la función recibirá una props denominada image, la cual será un string.</span><br/>
          export const myFunct = (<b className="text-lg">props &#123;image: string&#125;</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;<span className="opacity-70">// se utiliza la propiedad image.</span><br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">props.image</b>&#125; /&#62;<br/>
          &#125;
        </code>
        <p>Una forma más mantenible de tener varias propiedades, es juntando todas las propiedades en un tipo de TS o en una interface de TS.</p>
        <code className="code-block">
          <u>type</u> Props = &#123; image: string &#125;;<br/>
          export const myFunct = (<b className="text-lg">props: Props</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">props.image</b>&#125; /&#62;<br/>
          &#125;
        </code>
        <p>También se pueden pasar directamente los valores para evitar utilizar las propiedades colocando props.:</p>
        <code className="code-block">
          <u>interface</u> Props = &#123; image: string &#125;;<br/>
          export const myFunct = (<b className="text-lg">&#123; image &#125;: Props</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">image</b>&#125; /&#62;<br/>
          &#125;
        </code>
      </div>
      {/* Objeto children. */}
      <div>
        <h3>Objeto children.</h3>
        <p>Children es una propiedad que viene dentro del objeto props. Se puede llamar de diferentes maneras.</p>
        <p>Usando children directamente:</p>
        <code className="code-block">
          type Props = &#123;<br/>
          <span className="opacity-70">// el children puede contener un string, un elementoJSX, un array de elementosJSX o una función que retorna un elementoJSX.</span><br/>
          &emsp;children: string | JSX.Element | JSX.Element[] | () =&#62; JSX.Element<br/>
          &#125;<br/><br/>
          const YourComponent = (&#123;children&#125; : Props) =&#62; &#123;<br/>
          &emsp;return children<br/>
          &#125;
        </code>
        <code className="code-block">
          <p className="opacity-70">// forma en que se enviaría una función en el contenido children.</p>
          &#60;YourFirstComponent&#62;<br/>
          &emsp;&#123;() =&#62; &#60;div&#62;&#123;myScopedVariableReference&#125;&#60;/div&#62;&#125;<br/>
          &#60;/YourFirstComponent&#62;
        </code>
        <p>Usando PropsWithChildren:</p>
        <p>El tipo React.PropsWithChildren toma su componente prop y devuelve una unión de tipos con los elementos secundarios correctamente escritos. No se necesita trabajo adicional.</p>
        <code className="code-block">
          import &#123; PropsWithChildren &#125; from 'react';<br/><br/>
          type MyProps = &#123;<br/>
          &emsp;name: 'mi propiedad'<br/>
          &#125;<br/><br/>
          export const MyFunct = (props: PropsWithChildren&#60;MyProps&#62;) =&#62; &#123;<br/>
          &emsp;return props.children;<br/>
          &#125;
        </code>
        <p>En el ejemplo anterior, al pasar PropsWithChildren al elemento prop MyProps, se obtiene el elemento secundario tipado internamente.</p>
        <p>En la mayoría de los casos, esta es la forma recomendada de typear la prop children porque requiere menos repeticiones y la propiedad children se escribe implícitamente.</p>
        <p>Usando ReactNode:</p>
        <p>En los casos en los que se deba tipar explícitamente la propiedad children, se puede usar el tipo ReactNode, así se tipa directamente la propiedad children en vez d utilizar PropsWithChildren.</p>
        <code className="code-block">
        import &#123; ReactNode &#125; from 'react';<br/>
        type MyProps = &#123;<br/>
        &emsp;name: 'mi propiedad'<br/>
        &emsp;children: ReactNode<br/>
        &#125;<br/><br/>
        export const MyFunc = (props: MyProps) =&#62; &#123;<br/>
        &emsp;return props.children<br/>
        &#125;
        </code>
      </div>
      {/* Estados. */}
      <div>
        <h3>Estados.</h3>
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
      {/* Mínimas representaciones. */}
      <div>
        <h3>Mínimas representaciones.</h3>
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
      {/* Eventos. */}
      <div>
        <h3>Eventos.</h3>
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
      {/* Tipos para referencias. */}
      <div>
        <h3>Tipos para referencias.</h3>
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
      {/* Observadores. */}
      <div>
        <h3>Observables.</h3>
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
      {/* Creando tipos globales. */}
      <div>
        <h3>Creando tipos globales.</h3>
        <p>Los tipos que se crean dentro de un archivo tienen un alcance local, unicamente funcionan en el archivo que se crea. TypeScript permite crear tipos que pueden ser consumidos en toda la aplicación, estos tipos se denominan como <b>tipos globales</b>.</p>
        <p>Los tipos globales deben ser utilizados solo en archivos con terminación .d.ts, así que lo primero es crear el archivo en donde se creara el tipo global, el archivo suele llamarse <b>app.d.ts</b> porque "app" es el nombre estandar al que se refieren en un proyecto.</p>
        <p>Es importante que en el archivo <b>tsconfig.json</b> se indique que se procesen los archivos con terminación <b>.ts</b>:</p>
        <code className="code-block">
          &#123;...&#125;,<br/>
          "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],<br/>
          "exclude": ["node_modules"]
        </code>
        <p>Una convención especial para los tipos globales es que los nombres con los que se denominan suelen empezar con mayúscula y con la letra <b>I</b> o con <b>T</b> (generalmente con I).</p>
        <code className="code-block">
          type IImageItem = &#123; id: string; url: strign &#125;;
        </code>
        <h4>Tips.</h4>
        <ul>
          <li>Solamente se deben hacer tipos globales cuando se este seguro que el tipo global tendrá sentido en toda la aplicación.</li>
          <li>No crear demasiados tipos globales porque se pueden crecer sin control.</li>
          <li>Empezar con tipos locales y después exportarlos.</li>
        </ul>
      </div>
      {/* Librerías no-tipadas */}
      <div>
        <h3>Librerías no-tipadas.</h3>
        <p>Existen librerías que no tienen incluidss el tipado, así que no se pueden utilizar como se utilizarían normalmente en los proyectos con React, por esto se deben anexar o crear los tipos para usarlos en esas librerías.</p>
        <p>Por suerte existe el repositorio <b>Definitely Type</b> que es mantenido por la comunidad de desarrolladores, gracias a este repositorio los tipados ya estan creados para el 99% de las librerías. Tan solo se debería correr en la consola:</p>
        <code className="code-block"><b className="text-lg">npm install @types/</b><u>nombre de librería</u></code>
        <p>Para el resto de librerías cuyos tipados no existen en ningún lado, se puede crear su tipado manualmente, por ejemplo, la librería "lodash" no tiene tipado, por lo que tendría problemas con TypeScript y si no tubiera un tipado en el repositorio Definitely Type, se tendría que hacer los iguiente:</p>
        <p>Así se utiliza la librería:</p>
        <code className="code-block">
          import &#123; <u>random</u> &#125; from "<u>lodash</u>";<br/>
          const randomNum = () =&#62; random(1, 100);<br/>
          <span className="opacity-70">// obtiene una número aleatorio entre 1 y 100.</span>
        </code>
        <p>Se crea una librería, una carpeta llamada <b>@types</b>, dentro de esta se crean carpetas y archivos para cada una de las librerías no tipadas. Se pueden colocar los tipos de algún paquete que ya haya creado los tipos o se crean manualmente.</p>
        <p>Si se crea manualmente todo, entonces se crea dentro de la carpeta @types, una carpeta con el nombre de la librería y dentro de esta carpeta se crea un archivo con el nombre de la librería y con extensión <b>.d.ts</b>, este archivo será la definición de la librería.</p>
        <p>Dentro del archivo de extensión .d.ts, se crean las funciones y tipos para los métodos que se utilizarán de la librería.</p>
        <p>Ejemplo creando un tipo para el método random de la librería lodash:</p>
        <code className="code-block">
        <span className="opacity-70">// se tiene que colocar entre comillas el nombre con el que se importa la librería.</span><br/>
          declare module "<u>lodash</u>" &#123;<br/>
        <span className="opacity-70">// se sabe que el método recibe 2 numeros denominados en la documentación como lower y upper, y retorna 1 numero flotante.</span><br/>
          &emsp;export function <u>random</u>(lower: number, upper: number): number<br/>
          &#125;
        </code>
        <p>Para crear este tipo de tipados se debe conocer la librería para evitar conflictos.</p>
      </div>
      {/* Librerías y extensiones del objeto window. */}
      <div>
        <h3>Librerías y extensiones del objeto window.</h3>
        <p>Hay librerías de dependencias externas como los paquetes o librerías de Google Analitics, este tipo de scripts solamente se deben agregar al HTML y ya. Esto puede crear conflictos con TS porque ya que solo existe en el HTML, TS no tiene forma de saber que pasa en el HTML y se le debe inicar que esto existe y como se puede utilizar.</p>
        <p>Existen paquetes como los de Google Analitics que no están tipados y aunque hay algunos tipos que se encuentran en el repositorio Definitely Type, hay otros paquetes que no, para estos paquetes se crea dentro de la carpeta <b>@types</b> (y si aún no existe, se crea) una carpeta con el nombre del paquete y dentro de esta se crea un archivo de definición denominado <b>index.d.ts</b>.</p>
        <p>Como no se trata de una dependencia, sino que se quieren extender utilidades al objeto window, se utiliza un interface con window.</p>
        <p>Ejemplo del archivo de definición para el paquete Plausible:</p>
        <code className="code-block">
          <b className="text-lg">interface Window &#123;</b><br/>
          &emsp;<u>plausible</u>: (event: string) =&#62; void<br/>
          <b className="text-lg">&#125;</b>
        </code>
      </div>

    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/" target="_blank" rel="noopener noreferrer">Typing Component Props.</a>
        <a href="https://www.benmvp.com/blog/typescript-react-props-interfaces-type-aliases/" target="_blank" rel="noopener noreferrer">Cuando usar type o interface en las props.</a>
        <a href="https://blog.logrocket.com/using-react-children-prop-with-typescript/" target="_blank" rel="noopener noreferrer">Propiedad children de React con TypeScript.</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">Intersección con observador.</a>
      </section>
    </footer>
    </>
  );
}
