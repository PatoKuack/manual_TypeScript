function PageTS11() {
  return (
    <>
    <section>
      <h2>Parámetros.</h2>
      {/* Parámetros opcionales y nullish-coalescing. */}
      <div>
        <h3>Parámetros opcionales y nullish-coalescing.</h3>
        <p>Al momento de asignar los parámetros, se les tiene que colocar su tipado, además se les puede pedir que algún parametro sea opcional, es decir, que no es necesario que se coloque ese valor al momento de llamar a una función. Los parámetros opcionales deben encontrarse al final.</p>
        <code className="code-block">
          export const createProduct = (<br/>
          &emsp;id: number,<br/>
          &emsp;stock<b className="text-lg">?</b>: number,<br/>
          ) =&#62; &#123;<br/>
          &emsp;return &#123; id, stock &#125;<br/>
          &#125;<br/><br/>
          const product = createProduct(<b className="text-lg">1</b>);<br/>
          console.log(product);<br/>
          <span className="opacity-70">// &#123; id: 1, stock: <b className="text-lg">undefined</b> &#125;</span>
        </code>
        <p>Cuando los parámetros no reciben un valor a la hora de llamar a su función, obtienen por defecto el valor de <b>undefined</b>. Con el <b>logical OR operator (||)</b> se puede cambiar el valor undefined que se asigna por default por un valor definido, sin embargo, este valor definido se asigna a los parámetros que reciban un valor nulo (null), no definido (undefined o no pasando un valor), vacío ("", [], &#123;&#125;), cero (0) o falso (false).</p>
        <code className="code-block">
          export const createProduct = (<br/>
          &emsp;id: string | number,<br/>
          &emsp;isNew: boolean,<br/>
          &emsp;stock?: number,<br/>
          ) =&#62; &#123;<br/>
          &emsp;return &#123;<br/>
          &emsp;&emsp;id,<br/>
          &emsp;&emsp;isNew <b className="text-lg">|| true</b>,<br/>
          &emsp;&emsp;stock <b className="text-lg">|| 10</b><br/>
          &emsp;&#125;<br/>
          &#125;<br/><br/>
          const product = createProduct('Gorrita', false, 0);<br/>
          console.log(product);<br/>
          <span className="opacity-70">// &#123; id: "Gorrita", isNew: true, stock: 10 &#125;</span>
        </code>
        <p>Con el <b>Nullish Coalescing (??)</b> se puede definir un valor por default solamente para aquellos parámetros que reciban un valor nulo (null) o no definido (undefined o sin pasar valores a la función).</p>
        <code className="code-block">
          export const createProduct = (<br/>
          &emsp;id: string | number,<br/>
          &emsp;isNew: boolean,<br/>
          &emsp;stock?: number,<br/>
          ) =&#62; &#123;<br/>
          &emsp;return &#123;<br/>
          &emsp;&emsp;id,<br/>
          &emsp;&emsp;isNew <b className="text-lg">?? true</b>,<br/>
          &emsp;&emsp;stock <b className="text-lg">?? 10</b><br/>
          &emsp;&#125;<br/>
          &#125;<br/><br/>
          const product = createProduct('Gorrita', false);<br/>
          console.log(product);<br/>
          <span className="opacity-70">// &#123; id: "Gorrita", isNew: false, stock: 10 &#125;</span>
        </code>
      </div>
      {/* Parámetros por defecto. */}
      <div>
        <h3>Parámetros por defecto.</h3>
        <p>Al igual que el Nullish Coalescing (??), se pueden pasar parámetros por defecto utilizando los <b>Default function parameters</b> de TypeScript, aunque en Javascript también existen los default function parameters apartir de la versión de EcmaScript6.</p>
        <p>Con esto, ya no será necesario colocar un signo de interrogación para indicar que es un valor opcional (isNew<span className="line-through">?</span>: boolean) y solo se coloca el valor que se desea asignar como default utilizando en los parámetros el signo igual (=):</p>
        <code className="code-block">
          export const createProduct = (<br/>
          &emsp;id: string | number,<br/>
          &emsp;isNew: boolean = true,<br/>
          &emsp;stock: number = 10,<br/>
          ) =&#62; &#123;<br/>
          &emsp;return &#123;<br/>
          &emsp;&emsp;id,<br/>
          &emsp;&emsp;isNew,<br/>
          &emsp;&emsp;stock<br/>
          &emsp;&#125;<br/>
          &#125;<br/><br/>
          const product = createProduct('Gorrita', false);<br/>
          console.log(product);<br/>
          <span className="opacity-70">// &#123; id: "Gorrita", isNew: false, stock: 10 &#125;</span>
        </code>
        <p>Otra forma de definir valores por default es con javascript normal de la siguiente manera:</p>
        <code className="code-block">
          const createProduct = (<br/>
          &emsp;id: string | number, <br/>
          &emsp;isNew: boolean = true, <br/>
          &emsp;stock: number = 10<br/>
          ) =&#62; (&#123;id, isNew, stock&#125;);<br/><br/>
          const product = createProduct(1, false, 0);<br/>
          console.log(product);<br/>
          <span className="opacity-70">// &#123; id: 1, isNew: false, stock: 0 &#125;</span>
        </code>
      </div>
      {/* Parámetros rest. */}
      <div>
        <h3>Parámetros rest.</h3>
        <p>En JS podemos enviar una cantidad indefinida de argumentos a una función utilizando el <b>spread operator (...)</b> en los parámetros de dicha función, ejemplo:</p>
        <code className="code-block">
          const myFunc = (<b className="text-lg">...argumentos</b>) =&#62; console.log(<b className="text-lg">argumentos</b>);<br/>
          myFunc() <span className="opacity-70">// devuelve: []</span><br/>
          myFunc(1) <span className="opacity-70">// devuelve: [1]</span><br/>
          myFunc(1,3,5,7,11) <span className="opacity-70">// devuelve: [1, 3, 5, 7, 11]</span>
        </code>
        <p>Los <b>Rest parameters</b> se apoyan en la flexibilidad de JS de poder enviar la cantidad de argumentos que se deseen.</p>
        <code className="code-block">
          <span className="opacity-70">// con el spread operator (...) se reunen todos los argumentos recibidos en un array.</span><br/>
          const sum = (<b className="text-lg">...</b>arg:number[]) =&#62; &#123;<br/>
          &emsp;<span className="opacity-70">// con el método reduce() se aplica una suma a todos los elementos del array.</span><br/>
          &emsp;const addition = arg.reduce((acc,num)=&#62; acc + num, 0);<br/>
          &emsp;<span className="opacity-70">// se retorna la suma.</span><br/>
          &emsp;return addition;<br/>
          &#125;<br/>
          const value = sum(1,2,3,4)<br/>
          console.log(value) <span className="opacity-70">// imprime: 10</span>
        </code>
      </div>
      {/* Sobrecarga de funciones. */}
      <div>
        <h3>Sobrecarga de funciones.</h3>
        <p>Cuando las funciones tienen la opción de retornar más de un tipo de valor (por ejemplo, puede retornar un array o un string dependiendo del parámetro que se reciba), TS marca error cuando se intenta manipular el valor retornado con un método debido a que TS no esta seguro de cuál de los tipos de valor se retornó, así que pide hacer una verificación del tipo de valor.</p>
        <code className="code-block">
          function parseStr(input: string | string[]): string | string[]&#123;<br/>
          &emsp;<span className="opacity-70">// si el parámetro recibido es un array...</span><br/>
          &emsp;if(Array.isArray(input))&#123;<br/>
          &emsp;&emsp;<span className="opacity-70">// retorna los strings del array unidos.</span><br/>
          &emsp;&emsp;return input.join('');<br/>
          &emsp;&#125; else &#123;<br/>
          &emsp;&emsp;<span className="opacity-70">// si no, retorna cada caracter como un elemento de un array.</span><br/>
          &emsp;&emsp;return input.split('');<br/>
          &emsp;&#125;<br/>
          &#125;<br/><br/>
          const myString = parseStr('Pato'); <span className="opacity-70">// ['P', 'a', 't', 'o']</span><br/>
          const myString2 = parseStr(['P', 'a', 't', 'o']); <span className="opacity-70">// Pato</span><br/>
        </code>
        <p>Si en el ejemplo anterior se quisiera utilizar el método myString.reverse() para invertir el orden de los elementos del array, TS marcaría error, ya que TS no sabe si myString es un string o un array de strings. Para poder utilizar un método se debe hacer una verifiación de tipos.</p>
        <code className="code-block">
        if(Array.isArray(myString)) &#123;<br/>
        &emsp;myString.reverse();<br/>
        &#125;
        </code>
        <p>La <b>sobrecarga de funciones</b>, solo funciona en las funciones clásicas y no en las arrow functions.</p>
        <p>La <b>sobrecarga de funciones</b> ayuda a que TS pueda inferir qué tipo de dato es el output de una función. Para implementala, solo se repite la declaración de la función con cada tipo de argumento y de retorno:</p>
        <code className="code-block">
          <b className="text-lg">
            function parseStr(input: string): string[];<br/>
            function parseStr(input: string[]): string;<br/>
          </b>
          <span className="opacity-70">// la lógica de la función queda exactamente igual.</span><br/>
          function parseStr(input: string | string[]): string | string[]&#123;<br/>
          &emsp;if(Array.isArray(input))&#123;<br/>
          &emsp;&emsp;return input.join('');<br/>
          &emsp;&#125; else if(typeof input === string) &#123;<br/>
          &emsp;&emsp;return input.split('');<br/>
          &emsp;&#125;<br/>
          &#125;<br/>
          const myString = parseStr('Pato');<br/>
          myString = myString.toLowerCase();
          console.log(myString); <span className="opacity-70">// pato</span><br/>
        </code>
        <h4>Cómo evitar malas prácticas:</h4>
        <ul>
          <li>Si la sobrecarga tiene algún caso con un tipado de tipo <b>unknown</b> o de tipo <b>any</b> en el parámetro o en el retorno, se debe dejar al final, si no, va a fallar la verificación de tipos.</li>
          <div className="block-duo">
            <div>
            <code className="code-block bg-transparent-false">
              function diff(one: unknown): unknown[];<br/>
              function diff(one: string): string[];
            </code>
            </div>
            <div>
            <code className="code-block bg-transparent-true">
              function diff(one: string): string[];<br/>
              function diff(one: unknown): unknown[];
            </code>
            </div>
          </div>
          <li>Se debe analizar bien si se deben utilizar <i>sobrecarga de funciones</i> o se puede utilizar los <i>parametros opcionales</i>.</li>
          <div className="block-duo">
            <div>
            <code className="code-block bg-transparent-false">
              <span className="opacity-70">// 1)</span><br/>
              diff(one: string): number;<br/>
              diff(one: string, two: string): number;<br/>
              diff(one: string, two: string, three: boolean): number;
            </code>
            </div>
            <div>
            <code className="code-block bg-transparent-true">
              <span className="opacity-70">// 1)</span><br/>
              diff(one: string, two?: string, three?: boolean): number;
            </code>
            </div>
          </div>
          <div className="block-duo">
            <div>
            <code className="code-block bg-transparent-false">
              <span className="opacity-70">// 2) forma incorrecta.</span><br/>
              diff(): number;<br/>
              diff(one: number): boolean;<br/>
              diff(one: string): boolean;
            </code>
            </div>
            <div>
            <code className="code-block bg-transparent-true">
              <span className="opacity-70">// 2) forma correcta.</span><br/>
              diff(): number;<br/>
              diff(one: number | string): boolean;
            </code>
            </div>
          </div>
        </ul>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://francocarrara.notion.site/Curso-de-TypeScript-Tipos-Avanzados-y-Funciones-19ee4d14e21a41558ac1e04c1fbff870" target="_blank" rel="noopener noreferrer">Apuntes de un compañero II.</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR" target="_blank" rel="noopener noreferrer">Operador OR en JS (||).</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noopener noreferrer">Nullish coalescing operator (??).</a>
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener noreferrer">Método Array.reduce()</a>
      </section>
    </footer>
    </>
  )
}

export { PageTS11 }
