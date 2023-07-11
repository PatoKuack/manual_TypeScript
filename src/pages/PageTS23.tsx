export const PageTS23 = () => {
  return (
    <>
    <section>
      <h2>Tipos globales.</h2>
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
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>

      </section>
    </footer>
    </>
  );
}
