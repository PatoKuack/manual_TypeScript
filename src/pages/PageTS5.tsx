function PageTS5() {
  return (
    <>
    <section>
      <h2>Tipado.</h2>
      <p>Javascript tiene un tipado de datos, pero es un lenguaje débilmente tipado porque no se realiza una comprobación de los tipos, es decir, se le puede asignar un número a una variable y después se le puede asignar un objeto o un string y no habrá problemas al correr el código, pero esto puede generar errores en el futuro. TypeScript puede hacer a JavaScript fuertemente tipado para mitigar riesgos.</p>
      <p>A la hora de declarar variables en javascript lo hacemos de la siguiente forma:</p>
      <code className="code-block">const totCoins = 12;</code>
      <p>Mientras que en TypeScript se anexa la especificación del tipo <b><u>en minúscula</u></b>, a esto se le llama tipado o type annotation:</p>
      <code className="code-block">const totCoins<b>: number</b> = 12;</code>
      <p>Por suerte, al compilar el proyecto, TypeScript define los tipos en las variables usando su valor. Por lo mismo al declarar una variable sin inicializarla se debe asignar el tipo.</p>
      <code className="code-block">const totCoins<b>: number</b>;</code>
    </section>
    <section>
      <h2>Tipado inferido.</h2>
      <p>El motor de TypeScript permite asignar el tipo de datos de forma explícita o inferir por si mismo el tipo de dato.</p>
      <p>Si se cambian los tipos, TypeScript va a marcar un error.</p>
    </section>
    </>
  );
}

export { PageTS5 }