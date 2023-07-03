function PageTS10() {
  return (
    <>
    <section>
      <h2>Tipos de datos avanzados.</h2>
      {/* Enum. */}
      <div>
        <h3>Enum.</h3>
        <p>Los enums definen un conjunto de opciones predefinidas para facilitar la asignación de valores a variables que no pueden recibir cualquier valor, sino valores muy específicos. Son parecidos a los literal types pero su uso es distinto.</p>
        <p>Se utilizan con la palabra reservada enum y se denomina el enum con el nombre en mayúsculas. Dentro de los enums, las keys se escriben en mayúsculas, y los values pueden ser de tipo number o string.</p>
        <code className="code-block">
          <b>enum ROLES &#123;<br/>
          &emsp;ADMIN = "admin",<br/>
          &emsp;SELLER = "seller",<br/>
          &emsp;CUSTOMER = "customer"<br/>
          &#125;</b><br/><br/>
          type User = &#123;<br/>
          &emsp;username: string;<br/>
          &emsp;role: <b>ROLES</b>;<br/>
          &#125;<br/><br/>
          const shopUser: User = &#123;username: "Nuño", role: <b>ROLES.ADMIN</b>&#125;
        </code>
        <p>La ventaja es que permite ver directamente las opciones que se tienen para asignarle a una variable.</p>
        <p>En caso de que la propiedad del enum cambie en un futuro, también lo hará en su implementación.</p>
      </div>
      {/* Tupla. */}
      <div>
        <h3>Tupla.</h3>
        <p>Las tuplas permiten definir un array fuertemente tipado, tanto en la posición de cada elemento, como en el límite de elementos que se pueden ingresar en el array (por defecto esto no esta en javascript).</p>
        <p>En el siguiente ejemplo se crea un array definiendo que solo se le ingresen datos de tipo numero y string:</p>
        <code className="code-block">
          const prices: (number | string)[] = [1,3,2,1,2,'as']<br/>
          prices.push(2);<br/>
          prices.push('Hello');
        </code>
        <p>En el siguiente ejemplo se crea una tupla definiendo que acepte solamente un primer valor de tipo string, un segundo valor de tipo number y un tercer valor de tipo boolean, solamente aceptará esos valores en ese orden:</p>
        <code className="code-block">
          let user:[string, number, boolean] = ['Ramón', 23, true];<br/>
          user = ['Eduardo', 27, true];
        </code>
        <p>Con las tuplas además se puede hacer desestructuración, permitiendo acceder a valores específicos de una tupla:</p>
        <code className="code-block">
          let user:[string, number, boolean] = ['Ramón', 23, true];<br/>
          const [username, age] = user;<br/>
          console.log(username); <span className="opacity-70">// Ramón</span>
        </code>
        <p>Para una mejor referencia de su funcionamiento, se puede ver el useState de React, utiliza una tupla [state, setState]</p>
        <p>Con las tuplas, también se puede pasar un numero indefinido de valores de un tipo:</p>
        <code className="code-block">
          const myTuple: [boolean, <b className="text-lg">...number[]</b>, string];<br/>
          myTuple = [true, 2, 3, 4, 5, 6, "seven"];<br/>
        </code>
        <p>Además, se pueden pasar valores opcionales:</p>
        <code className="code-block">
          let myTuple: [boolean, number<b className="text-lg">?</b>] = [true]; <span className="opacity-70">// number es opcional</span><br/>
          console.log(myTuple); <span className="opacity-70">//[ true ]</span>
        </code>
      </div>
      {/* Unknown type. */}
      <div>
        <h3>Unknown type.</h3>
        <p>Es un tipo que indica que la variable es desconocida, es similar a any, pero sin quitar el análisis de código estático que brinda TypeScript.</p>
        <p><b>Unknown</b> fuerza una verificación de tipos, si se utiliza un método para un string, se pide que se asegure que la variable contenga un string, en cambio a un tipo de dato <b>any</b> no le importa si puede haber errores.</p>
        <code className="code-block">
          let unknownVar: unknown;<br/>
          unknownVar = &#123;&#125;;<br/><br/>
          if (typeof unknownVar === "string")&#123;<br/>
          &emsp;unknownVar.toUpperCase();<br/>
          &#125;
        </code>
        <p>En el ejemplo anterior, se agrega el condicional if poque se necesita comprobar que el valor sea el esperado para poder manupilar la variable. Así se evita que el valor desconocido no sea un valor esperado y produzca algún error.</p>
        <p>También se puede utilizar en funciones cuando no se sabe exactamente qué va a devolver la función:</p>
        <code className="code-block">
          const parse = (str: string): unknown =&#62; &#123;<br/>
          &emsp;return JSON.parse(str)<br/>
          &#125;
        </code>
        <p>En el ejemplo anterior se indica que el valor que retornará la función, será de tipo unknown (desconocido) y así cuando se utilice el valor retornado, se pedirá que se verifique el tipo del valor evitando errores en el código.</p>
      </div>
      {/* Never type. */}
      <div>
        <h3>Never type.</h3>
        <p>Se utiliza dejando la inferencia de TS, se les define así a las funciones que nunca van a terminar o que detienen el programa, como un ciclo infinito.</p>
        <p>En el siguiente ejemplo, TypeScript infiere que el retorno de la función es de tipo <b>never</b> ya que provoca un ciclo infinito:</p>
        <code className="code-block">
          const esUnCicloSinFin = () =&#62; &#123;<br/>
          &emsp;while(true)&#123;<br/>
          &emsp;&emsp;console.log('El Rey León');<br/>
          &emsp;&#125;<br/>
          &#125;
        </code>
        <p>En el siguiente ejemplo, TypeScript infiere que el retorno de la función es de tipo <b>never</b> ya que al hacer un throw, se detiene la ejecución y el programa se detiene:</p>
        <code className="code-block">
          const fail = (message: string) =&#62; &#123;<br/>
          &emsp;throw new Error(message);<br/>
          &#125;
        </code>
        <p>En el siguiente ejemplo, TS debería inferir que es infinito, pero infiere que es void:</p>
        <code className="code-block">
          const badFor = () =&#62; &#123;<br/>
          &emsp;for(let i = 1; i &#60; 10; i)&#123;<br/>
          &emsp;&emsp;console.log(i);<br/>
          &emsp;&#125;<br/>
          &#125;
        </code>
        <p>Lo mismo pasa con el siguiente ejemplo de función recursiva sin un escape. Si bien la función va a ser infinita (Y no es difícil de notarlo por nosotros mismos), TS no detecta el tipo <b>never</b> y lo infiere como void:</p>
        <code className="code-block">
          const badRecursion = () =&#62; &#123;<br/>
          &emsp;if(true) &#123;<br/>
          &emsp;&emsp;console.log('Oh now! here we go again');<br/>
          &emsp;&emsp;badRecursion();<br/>
          &emsp;&#125;<br/>
          &#125;
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://francocarrara.notion.site/Curso-de-TypeScript-Tipos-Avanzados-y-Funciones-19ee4d14e21a41558ac1e04c1fbff870" target="_blank" rel="noopener noreferrer">Apuntes de un compañero II.</a>
      </section>
    </footer>
    </>
  )
  }
  
  export { PageTS10 }