function PageTS3() {
  return (
    <>
    <section>
      <h2>Compilador / Transpilador.</h2>
      <p>El navegador y Node no reconocen nativamente archivos TypeScript, así que el transpilador traduce el código de .ts a .js.</p>
      <p>Para compilar un fichero, ejecutamos:</p>
      <code className="code-block">
        <span className="opacity-70">#npx tsc ruta/archivo.ts --target &#60;target&#62; --outDir &#60;directory&#62;</span><br/>
        <b>npx tsc src/demo.ts</b> --target es6 --outDir dist
      </code>
      <p>Por defecto TypeScript transpila el código para la versión de ECMAScript 3, por lo que es posible que muchas funciones marquen errores. Es por esto que se anexa la instrucción <b>--target es6</b></p>
      <p>A la hora de hacer deploy no se suben los archivos .ts, por lo que lo ideal sería que al transpilar estos archivos se hagan en una carpeta distinta, esta carpeta se suele llamar "dist" o "build". Es por esto que se anexa la instrucción <b>--outDir dist</b></p>
      <p>También se puede crear un archivo tsconfig.json con la configuración de la siguiente manera:</p>
      <ol>
        <li>Posicionado en el directorio raíz del proyecto.</li>
        <li>Ejecutar el comando <code>npx tsc --init</code>. Esto creará el archivo <b>tsconfig.json</b>.</li>
        <li>Ejecutar el comando <code>npx tsc -p ./ -w</code>
          <ul>
            <li>Esto compilará en el mismo directorio todos los archivos .ts</li>
            <li>Para modificar el target o el destino de los archivos compilados, en el archivo <b>tsconfig.json</b> buscar la flag <i>“outDir”</i> y modificarla para que quede así: <code>"outDir": "./dist",</code></li>
            <li>Se le puede indicar al compilador la raíz del proyecto para enfocar la compilación y que sea mas eficiente. Solo se modifica la flag “rootDir” así: <code>"rootDir": "./src",</code></li>
          </ul>
        </li>
      </ol>
      <code className="code-block">
        "compilerOptions": &#123;<br/>
          <div className="indent-2">"outDir": "./dist",</div>
          <div className="indent-2">"rootDir": "./src",</div>
          <div className="indent-2">"strict": true,</div>
          <div className="indent-2">"noImplicitAny": true,</div>
          <div className="indent-2">"noImplicitReturns": true,</div>
        &#125;
      </code>
      <p>Para compilar el proyecto, se ejecuta, desde la terminal, el código:</p>
      <code className="code-block">npx tsc</code>
      <p>Para evitar la compilación manual y hacer que sea automática y continua, se ejecuta el comando:</p>
      <code className="code-block">npx tsc --watch</code>
      <p>Para ejecutar el código compilado (el compilado es el que está en la carpeta dist), se coloca en la terminal la instrucción:</p>
      <code className="code-block">node dist/nombre_del_archivo.js</code>
    </section>
    {/* <section>
      <h2>Node.</h2>
      <p>Para correr TS desde node se utiliza un paquete llamado <a href="https://typestrong.org/ts-node/" target="_blank" rel="noopener noreferrer">tsnode</a>, se instala con la instrucción <b>npm install -D ts-node</b></p>
      <p>Después se coloca la instrucción <b>npx ts-node src/</b>archivo<b>.ts</b> para evitar transpilar el código a JavaScript y correrlo directamente desde la consola</p>
      <p>Es recomendable utilizar este paquete solo del lado del backend por cuestriones de rendimiento.</p>
    </section> */}
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://francocarrara.notion.site/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81" target="_blank" rel="noopener noreferrer">Apuntes de un compañero I.</a>
      </section>
    </footer>
    </>
  );
}

export { PageTS3 }
