function PageTS8() {
  return (
    <>
    <section>
      <h2>Funciones.</h2>
      <p>Las funciones en arrow function son más utilizadas, porque las funciones clásicas tienen algunos problemas, una de ellas es con las referencias del <i>this</i>.</p>
      <code className="code-block">
        <span className="line-through">function oso() &#123; ... &#125;</span><br/>
        const oso = <b className="text-lg">() =&#62;</b> &#123; ... &#125;
      </code>
      <p>En TS se debe declarar el tipo de dato de cada parámetro en la función, además se tienen que colocar todos los parámetros que ocupará la función.</p>
      <code className="code-block">
        type ShirtSizes = 'S' | 'M' | 'L' | 'XL';<br/>
        function createProduct(<br/>
        &emsp;<b>title: string,<br/>
        &emsp;createdAt: Date,<br/>
        &emsp;size: ShirtSizes</b><br/>
        ) &#123;<br/>
        &emsp;return &#123;<br/>
        &emsp;&emsp;title,<br/>
        &emsp;&emsp;createdAt,<br/>
        &emsp;&emsp;size<br/>
        &emsp;&#125;<br/>
        &#125;<br/><br/>
        const product1 = createProduct('Chamarra Punk', new Date(), 'XL');<br/>
        console.log(product1.title);
      </code>
      <p>Se pueden utilizar parámetros opcionales colocando un signo de interrogación al final del nombre del parámetro que se solicitará, esto indica que no es necesario recibir ese parámetro, de no ser recibido se considera undefined:</p>
      <code className="code-block">
        const createProduct = (title: string, date<b className="text-lg">?</b>: Date) &#123;<br/>
        &emsp;return &#123; title, date &#125;<br/>
        &#125;<br/><br/>
        const product1 = createProduct('Chamarra Punk');<br/>
        console.log(product1.date); <span className="opacity-70">// undefined</span>
      </code>
      {/* Retorno de funciones. */}
      <div>
        <h3>Retorno de funciones.</h3>
        <p>Con TS se puede especificar el tipo de dato que va a retornar una función, solo se agrega el tipo de dato después del cierre de paréntesis en dónde se colocan los parámetros. Si no se indica el tipo de dato de retorno, TS lo infiere por si solo.</p>
        <code className="code-block">
          const greeting = (humanName: string)<b className="text-lg">: string </b>=&#62; &#123;<br/>
          &emsp;let myGreeting: string = "Hello, " +  humanName;<br/>
          &emsp;return myGreeting<br/>
          &#125;<br/>
          const greet = greeting("Fulanito!");
        </code>
        <p>Las funciones que no retornan algo, tienen un tipo <b>void</b>.</p>
      </div>
      {/* Objetos en funciones. */}
      <div>
        <h3>Objetos en funciones.</h3>
        <p>En TS, cuando a las funciones se les mandan objetos como argumentos, se pueden especificar las keys y los tipos de cada value.</p>
        <code className="code-block">
          const printProduct = ( <b className="text-lg">data: &#123;<br/>
          &emsp;title: string,<br/>
          &emsp;material?: string<br/>
          &#125;</b> ):void =&#62; &#123;<br/>
          console.log(data);<br/>
          &#125;;<br/><br/>
          addProduct( &#123; title: "Gorra" &#125; );<br/>
          <span className="opacity-70">// El segundo parámetro (material) es opcional por tener el ?.</span>
        </code>
      </div>
      {/* Objetos como tipos. */}
      <div>
        <h3>Objetos como tipos.</h3>
        <p>Se pueden crear tipos con un objeto.</p>
        <code className="code-block">
          <span className="opacity-70">// se crea un tipo Objeto con valores tipados.</span><br/>
          type Product = &#123;<br/>
          &emsp;title: string,<br/>
          &emsp;material?: string<br/>
          &#125;<br/><br/>
          <span className="opacity-70">// products será de tipo array, cuyo array solo aceptará objetos que cumplan con las especificaciones de Product.</span><br/>
          const products: Product[] = [];<br/><br/>
          <span className="opacity-70">// el parámetro recibirá solamente objetos que cumplan con el tipo Product.</span><br/>
          const addProduct = ( data: Product ): void =&#62; &#123;<br/>
          &emsp;products.push( data );<br/>
          &#125;;<br/><br/>
          addProduct( &#123; title: "Gorra" &#125; );
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
  )
  }

  export { PageTS8 }
