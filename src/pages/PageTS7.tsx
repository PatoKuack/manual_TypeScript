function PageTS7() {
  return (
    <>
    <section>
      <h2>Tipos de datos especiales.</h2>
      {/* Any. */}
      <div>
        <h3>Any.</h3>
        <p>Este tipo de dato desactiva el tipado de TS y permite reasignar una variable con cualquier tipo de dato.</p>
        <p>No esta recomendado utilizar any, debido a que se pierde la capacidad de atrapar cualquier error. Sin embargo, si se migra código de JS a TS puede ser útil.</p>
        <code className="code-block">
          let myDinamicVar : any;<br/>
          myDynamicVar = 100;<br/>
          myDynamicVar = "Hola";<br/>
          myDynamicVar = &#123;&#125;;
        </code>
        <p>Uno de los grandes errores que genera, es cuando se le asigna, a una variable de un tipo específico, una variable de tipo any:</p>
        <code className="code-block">
          let anyVar : any;<br/>
          anyVar = &#123;&#125;;<br/><br/>
          let newVar : boolean = anyVar;
        </code>
        <p>La última instrucción debería dar error porque newVar=&#123;&#125;, se le asigna un objeto a newVar cuando solo se le permite recivir booleans y aún así, no marca error.</p>
        <p>Se puede convertir el tipo de una variable a cualquier otro tipo de dato, a esto se le conoce como <b>cast</b>. Existen dos maneras de hacer un cast:</p>
        <p>Ejemplo utilizando el <b>as operator</b> <i>(as en del ingles se traduce a español como "como")</i>:</p>
        <code className="code-block">
          let saludo: any;<br/>
          saludo = 'Hola';<br/>
          const rta = (saludo as string).toLowerCase();<br/>
          <span className="opacity-70">// se puede cambiar el tipo de dato, pero se seguirá tratando con su tipo de dato original.</span><br/>
          saludo = 801;
        </code>
        <p>Ejemplo utilizando una propiedad de TS llamada <b>los genéricos &#60;<u>type</u>&#62;</b>:</p>
        <code className="code-block">
          let saludo: any;<br/>
          saludo = 'Hola';<br/>
          const rta = (&#60;string&#62;saludo).toLowerCase();<br/>
          <span className="opacity-70">// se puede cambiar el tipo de dato, pero se seguirá tratando con su tipo de dato original.</span><br/>
          saludo = 801;
        </code>
      </div>
      {/* Union types. */}
      <div>
        <h3>Union types.</h3>
        <p>Permiten mayor flexibilidad en el código, ya que permiten asignar varios tipos a una variable.</p>
        <code className="code-block">
          let userId: string | number;<br/>
          userId = 14;<br/>
          userId = "a11";
        </code>
        <p>En la practica se suelen soportar máximo 3 tipos en una variable.</p>
        <p>Se puede hacer dinámico este tipo de tipado con condicionales if:</p>
        <code className="code-block">
          let userId: string | number;<br/>
          userId = "c32"<br/>
          if (typeof userId === 'string') &#123;<br/>
          &emsp;userId.toUpperCase();<br/>
          &#125; else &#123;<br/>
          &emsp;userId.toFixed(2);<br/>
          &#125;
        </code>
      </div>
      {/* Alias */}
      <div>
        <h3>Alias.</h3>
        <p>Los alias permiten agrupar varios tipos dentro de un prototipo.</p>
        <p><b>type</b> es una palabra reservada de TypeScript y permite crear tipos de datos, después de esta palabra reservada se tiene que colocar el nombre del tipo en notación PascalCase y por último se le asigna a través de un igual el valor que resivirá:</p>
        <code className="code-block">
          <span className="opacity-70">// se crea el Alias.</span><br/>
          type <u>UserId</u> = string | number;<br/>
          <span className="opacity-70">// se asigna el alias a una variable.</span><br/>
          let userId: <u>UserId</u> = "c32";
        </code>
      </div>
      {/* Literal Types (tipos literales). */}
      <div>
        <h3>Literal Types (tipos literales).</h3>
        <p>Permiten limitar dentro de una variable los valores.</p>
        <code className="code-block">
          let shirtSizes: 'S' | 'M' | 'L' | 'XL';<br/>
          <span className="opacity-70">// a la variable solo se le permitirá tener uno de los valores especificados en su tipado.</span><br/>
          shirtSize = 'M';
        </code>
        <p>Convinando el Alias y el Literal Type:</p>
        <code className="code-block">
          type Sizes = 'S' | 'M' | 'L' | 'XL';<br/>
          let shirtSizes: Sizes;<br/>
          shirtSize = 'M';
        </code>
      </div>
      {/* Null / Undefined. */}
      <div>
        <h3>Null / Undefined.</h3>
        <p>Para poder usar Null o Undefined en una variable, debe especificarse con los union types, ya que <u>null y undefined son su propio tipo de dato</u>.</p>
        <code className="code-block">
          let myNull = null;<br/>
          <span className="opacity-70">// TS infiere que su tipo será any.</span><br/>
          let myUndefined = undefined;<br/>
          <span className="opacity-70">// TS infiere que su tipo será any.</span><br/><br/>
          let myName: string | null;
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

export { PageTS7 }