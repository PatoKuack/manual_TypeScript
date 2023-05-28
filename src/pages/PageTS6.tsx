function PageTS6() {
  return (
    <>
    <section>
      <h2>Numbers.</h2>
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
    </section>
    </>
  );
}

export { PageTS6 }