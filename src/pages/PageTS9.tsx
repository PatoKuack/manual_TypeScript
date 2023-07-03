function PageTS9() {
  return (
    <>
    <section>
      <h2>Importaciones.</h2>
      {/* Módulos. */}
      <div>
        <h3>Módulos.</h3>
        <p>Como buena práctica, a los archivos para modelado de datos se les deben colocar en su nombre la palabra <b>model</b> después del nombre del archivo y antes de la extesión, ejemplo: <b>nombre.model.ts</b></p>
        <p>A los archivos que van a usar los datos del modelado se les deben colocar en su nombre la palabra <b>service</b> en vez de <i>model</i>, ejemplo: <b>nombre.service.ts</b></p>
        <p>Con la palabra reservada <b>export</b> se puede exportar una variable, de esta manera se necesitará utilizar la palabra reservada <b>import</b> para poder utilizar esa variable y así se pueden evitar errores en el que haya dos variables con el mismo nombre en doferentes archivos, pero en el mismo proyecto.</p>
        <p>Para JavaScript, .model y .service no tienen significado, unicamente le es relevante .ts. De esta manera podemos hacer programación modular con TypeScript.</p>
        <code className="code-block">
          <span className="block mb-2 text-center font-bold">product.model.ts</span>
          <b className="text-lg">export</b> type ShirtSizes = 'S' | 'M' | 'L' | 'XL';<br/><br/>
          <b className="text-lg">export</b> type Product = &#123;<br/>
          &emsp;title: string;<br/>
          &emsp;createdAt: Date;<br/>
          &emsp;stock: number;<br/>
          &emsp;size?: ShirtSizes;<br/>
          &#125;;
        </code>
        <code className="code-block">
          <span className="block mb-2 text-center font-bold">product.service.ts</span>
          <b className="text-lg">import</b> &#123; Product &#125; from './product.model.ts';<br/><br/>
          <b className="text-lg">export</b> const products: Product[] = [];<br/>
          <b className="text-lg">export</b> const addProduct = (data: Product): void =&#62; &#123;<br/>
          &emsp;products.push(data);<br/>
          &#125;;<br/>
          <b className="text-lg">export</b> const calcStock = ():number =&#62; &#123;<br/>
          &emsp;let total = 0;<br/>
          &emsp;products.forEach(product =&#62; total += product.stock)<br/>
          &emsp;return total;<br/>
          &#125;
        </code>
        <code className="code-block">
          <span className="block mb-2 text-center font-bold">product.ts</span>
          <b className="text-lg">import &#123; addProduct, calcStock &#125; from './product.service.ts';</b><br/><br/>
          addProduct(&#123; <br/>
          &emsp;title: 'Manga larga', <br/>
          &emsp;createdAt: new Date(), <br/>
          &emsp;stock: 15 <br/>
          &#125;);<br/><br/>
          const total = calcStock();<br/>
          console.log(total);
        </code>
      </div>
      {/* Librerías que soportan TS. */}
      <div>
        <h3>Librerías que soportan TS.</h3>
        <p>Las librerías que tienen soporte para TS son mas sencillas de usar, ya que permiten ver el tipo de dato y la cantidad de parámetros que reciben las funciones.</p>
        <p>En la página de npm de cada librería indican si se tiene soporte para typescript colocando al lado del nombre de la librería un icono azul de TS, también se puede verificar su compatibilidad con TS buscando entre los archivos de su repositorio un archivo llamado <b>tsconfig.json</b></p>
        <p>Ejemplo utilizando la librería <b>date-fns</b> para manipular fechas en JS y TS:</p>
        <code className="code-block">
          <span className="opacity-70">// la librería se instala con <b>npm install date-fns —save</b></span><br/>
          import &#123; subDays, format &#125; from 'date-fns';<br/><br/>
          const date = new Date(1998, 1, 28);<br/>
          const respuesta = subDays(date, 30);<br/>
          const myString = format(respuesta, 'yyyy/MM/dd');<br/><br/>
          console.log(myString); <span className="opacity-70">// 1998/01/29</span>
        </code>
      </div>
      {/* Librerías que NO soportan TS. */}
      <div>
        <h3>Librerías que NO soportan TS.</h3>
        <p>El ecosistema de JavaScript ha creado unos módulos para agregar manualmente tipado a las librerías que no tienen soporte para TypeScript. Se necesita instalar el siguiente paquete colocando el nombre de la librería al final: <b>npm i --save-dev @types/</b><u>nombre de librería</u></p>
        <p>Generalmente el editor de texto proporciona el código para tipar la librería y evitar errores.</p>
        <p>Se puede ver cuáles son las librerías soportadas en TS desde el <a href="https://www.npmjs.com/~types" target="_blank" rel="noopener noreferrer">perfíl de NPM de TypeScript</a>.</p>
        <p>Ejemplo utilizando la librería <b>lodash</b> que es una librería que agrega funciones de programación funcional que permite utilizar algoritmos complejos y otras funcionalidades que no tiene JavaScript de forma normal.</p>
        <code className="code-block">
          <span className="opacity-70">// la librería se instala con <b>npm install lodash</b></span><br/>
          <span className="opacity-70">// el paquete para agregar tipado a la libreria se instala con <b>npm i --save-dev @types/lodash</b></span><br/>
        </code>
      </div>
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
  
  export { PageTS9 }