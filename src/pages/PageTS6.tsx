function PageTS6() {
  return (
    <>
    <section>
      <h2>Tipos de datos primitivos.</h2>
      {/* Number. */}
      <div>
        <h3>Number.</h3>
        <p>El valor <b>NaN</b> (Not A Number) es considerado un número y se suele adquirir cuando por medio de un método (parseInt()) se convierte un string con letras a un número.</p>
        <p>Se puede asignar un tipo number especificando si el número es hexadecimal, binario u octal colocando los códigos 0x, 0b y 0o respectivamente, TypeScript solo aceptará valores que encajen en estos códigos, es decir, no aceptará una Z en el hexadecimal o un 5 en el binario.</p>
        <code className="code-block">
          let bin = 0b101;<br/>
          let oct = 0o074;<br/>
          let hex = 0xfff;<br/>
          <span className="opacity-70">// al utilizar la variable, se convierte en número decimal.</span><br/>
          console.log('hex', hex);<br/>
          <span className="opacity-70">// imprimirá: hex 4095</span>
        </code>
      </div>
      {/* Boolean. */}
      <div>
        <h3>Boolean.</h3>
        <p>Los únicos valores que permite utilizar son true o false, no 'true' ni 0 ni null ni undefined.</p>
      </div>
      {/* String. */}
      <div>
        <h3>String.</h3>
        <p>Se pueden utilizar los template literals (``), comillas dobles ("") o simples ('').</p>
      </div>
      {/* Array. */}
      <div>
        <h3>Array.</h3>
        <p>Si un array se define implicitamente, la variable que lo contenga solamente aceptará ingresarle o sustituirle valores que coincidan con alguno de los tipos que contenga.</p>
        <code className="code-block">
          let values = [5, 15, true, 75];<br/>
          <span className="opacity-70">// TS infiere que los tipos de datos dentro del array son number y boolean</span><br/>
          values.push(111);<br/>
          <span className="opacity-70">// los nuevos valores (sustituidos o anexados) solo pueden ser de tipo number o boolean</span>
        </code>
        <p>Si un array se define explicitamente, se pueden definir los posibles tipos de valores que se le pueden anexar aunque aún no las contenga.</p>
        <code className="code-block">
        let values: (number | string | boolean)[] = ['Hola', true];<br/>
        values.push(55);
        </code>
        <p>Si se especifica por medio del tipado que habrá objetos (Object), el array podrá aceptar valores que sean arrays y objetos. En este caso Object va con la primera letra en mayíscula.</p>
        <code className="code-block">
          let values: (number | <b>Object</b>)[] = [8, 35];<br/>
          values.push(&#123;&#125;);<br/>
          values.push([]);
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

export { PageTS6 }