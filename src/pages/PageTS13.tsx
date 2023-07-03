function PageTS13() {
  return (
    <>
    <section>
      <h2>Utility Types.</h2>
      <p>TypeScript proporciona varios tipos de utilidades denominados <b>Utility Types</b> para facilitar las transformaciones de tipos comunes.</p>
      {/* Readonly. */}
      <div>
        <h3>Readonly.</h3>
        <p>En los atributos que no se desea que sean modificados, se les pueden aplicar el <b>readonly</b> que convierte los atributos a "solo lectura" por lo que no se van a poder sobrescribir, ni modificar.</p>
        <code className="code-block">
          <span className="opacity-70">// del tipado BaseModel, se colocarán 2 campos como solo lectura.</span><br/>
          export interface BaseModel &#123;<br/>
          &emsp;<b className="text-lg">readonly</b> id: string | number;<br/>
          &emsp;<b className="text-lg">readonly</b> createdAt: Date;<br/>
          &emsp;updatedAt: Date;<br/>
          &#125;<br/><br/>
          <span className="opacity-70">// del tipado BaseModel, se colocarán todos sus campos como solo lectura solamente en el type DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Readonly&#60;</b>BaseModel<b className="text-lg">&#62;</b>;<br/><br/>
          interface DTO2 extends <b className="text-lg">Readonly&#60;</b>BaseModel<b className="text-lg">&#62;</b> &#123;<br/>
          &emsp;props: string;<br/>
          &#125;
        </code>
      </div>
      {/* Omit */}
      <div>
        <h3>Omit.</h3>
        <p>Omit es un Utility Type que permite omitir propiedades o campos específicos de un type o un interface.</p>
        <p>En los casos en los que se necesite extender la interface, conviene hacerlo con interface y agregar las propiedades, en cambio, cuando solo se quieren omitir tipos, es mejor hacerlo con type.</p>
        <code className="code-block">
          <span className="opacity-70">// del tipado BaseModel, se omiten 2 campos al guardarse en DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Omit&#60;</b>BaseModel<b className="text-lg">, 'omited1' | 'omited2'&#62;</b><br/><br/>
          interface DTO2 extends <b className="text-lg">Omit&#60;</b>BaseModel<b className="text-lg">, 'omited1' | 'omited2'&#62;</b>&#123;<br/>
          &emsp;newProp: string;<br/>
          &#125;
        </code>
      </div>
      {/* Pick */}
      <div>
        <h3>Pick.</h3>
        <p>Pick es lo contrario a Omit. Este Utility Type permite utilizar campos específicos.</p>
        <code className="code-block">
        <span className="opacity-70">// del tipado BaseModel, se anexan solo 2 campos al type DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Pick&#60;</b>BaseModel<b className="text-lg">, 'picked1' | 'picked2'&#62;</b><br/><br/>
          interface DTO2 extends <b className="text-lg">Pick&#60;</b>BaseModel<b className="text-lg">, 'picked1' | 'picked2'&#62;</b>&#123;<br/>
          &emsp;newProp: string;<br/>
          &#125;
        </code>
      </div>
      {/* Partial. */}
      <div>
        <h3>Partial.</h3>
        <p>Partial es un Utility Type que permite definir a todos los parámetros de una interface como opcionales.</p>
        <code className="code-block">
          <span className="opacity-70">// del tipado BaseModel, se anexan todos sus campos como opcionales a DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Partial&#60;</b>BaseModel<b className="text-lg">&#62;</b>;<br/><br/>
          interface DTO2 extends <b className="text-lg">Partial&#60;</b>BaseModel<b className="text-lg">&#62;</b> &#123;&#125;
        </code>
      </div>
      {/* Required */}
      <div>
        <h3>Required.</h3>
        <p>Required es lo contrario a Partial. Este Utility Type permite definir a todos los parámetros como obligatorios.</p>
        <code className="code-block">
          <span className="opacity-70">// del tipado BaseModel, se agregan todos sus campos como requeridos a DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Required&#60;</b>BaseModel<b className="text-lg">&#62;</b>;<br/><br/>
          interface DTO2 extends <b className="text-lg">Required&#60;</b>BaseModel<b className="text-lg">&#62;</b>; &#123;&#125;
        </code>
      </div>
      {/* Anidamiento de Utility Types. */}
      <div>
        <h3>Anidamiento de Utility Types.</h3>
        <p>Se pueden anidar distintos tipos de Utility Types para fusionar características de los distintos Utility Types.</p>
        <code className="code-block">
          <span className="opacity-70">// del tipado BaseModel, se agregan los 2 campos especificados como opcionales a DTO1.</span><br/>
          type DTO1 = <b className="text-lg">Partial&#60;Pick&#60;</b>BaseModel<b className="text-lg">, 'picked1' | 'picked2'&#62;&#62;</b>;<br/><br/>
          interface DTO2 extends <b className="text-lg">Partial&#60;Pick&#60;</b>BaseModel<b className="text-lg">, 'picked1' | 'picked2'&#62;&#62;</b> &#123;<br/>
          &emsp;props: string; <br/>
          &#125;
        </code>
      </div>
      {/* Acceder al tipado por índice. */}
      <div>
        <h3>Acceder al tipado por índice.</h3>
        <p>Se puede acceder al tipado de una propiedad de forma similar a como se accede a los valores dentro de un array, pero aplicado a una interface para obtener el tipo de dato de una propiedad. Al colocar el dato de esta forma, se evita que en caso de que cambie algún tipo de dato en la interface, aparezcan errores en los casos que no hayan inconsistencias propias del código.</p>
        <code className="code-block">
          <span className="opacity-70">// InterfaceName['property']</span><br/>
          <span className="opacity-70">// Se pasa como tipo de dato el valor de la propiedad dentro de la interface.</span><br/>
          const updateProduct = (idSearch: <b className="text-lg">BaseModel['id']</b>);
        </code>
      </div>
      {/* ReadonlyArray. */}
      <div>
        <h3>ReadonlyArray.</h3>
        <p>Este Utility Type convierte un Array normal en uno de solo lectura previniendo las mutaciones en los arrays, por esto, TS bloquea la funcionalidad de los métodos que pueden mutar un Array como .pop(), .shift(), .push(), .unshift(), entre otros y solo permite el uso de métodos que no mutan el Array como .filter(), .slice(), .reduce(), .map(), entre otros.</p>
        <code className="code-block">
          <span className="opacity-70">// const inmutableArray = ReadonlyArray&#60;Type&#62; = [value];</span><br/>
          const numberArray = <b className="text-lg">ReadonlyArray&#60;</b>number<b className="text-lg">&#62;</b> = [1,2,3,4,5];
        </code>
        <code className="code-block">
          function foo(arr: ReadonlyArray&#60;string&#62;) &#123;<br/>
          &emsp;arr.slice(); <span className="opacity-70">// okay</span><br/>
          &emsp;arr.push("hello!"); <span className="opacity-70">// error!</span><br/>
          &#125;<br/><br/>
          <span className="opacity-70">/** Desde la versión 3.4 de TS, también se puede utilizar esta sintaxis: **/</span><br/><br/>
          function foo2(arr: readonly string[]) &#123;<br/>
          &emsp;arr.slice(); <span className="opacity-70">// okay</span><br/>
          &emsp;arr.push("hello!"); <span className="opacity-70">// error!</span><br/>
          &#125;
        </code>
        <p><b>Readonly</b> prevendría la reasignación de un Array y <b>ReadonlyArray</b> prevendría la modificación del Array.</p>
        <code className="code-block">
          <span className="opacity-70">// ejemplo de un Array que es un campo extendido de una Interface llamada Product.</span><br/>
          export interface ProductDto extends <b className="text-lg">Readonly</b>&#60;Partial&#60;Omit&#60;Product, 'tags'&#62;&#62;&#62;&#123;<br/>
          &emsp;tags: <b className="text-lg">ReadonlyArray</b>&#60;string&#62;;<br/>
          &#125;
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://francocarrara.notion.site/Curso-de-TypeScript-Tipos-Avanzados-y-Funciones-19ee4d14e21a41558ac1e04c1fbff870" target="_blank" rel="noopener noreferrer">Apuntes de un compañero II.</a>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noopener noreferrer">Utility Types.</a>
      </section>
    </footer>
    </>
  )
}

export { PageTS13 }