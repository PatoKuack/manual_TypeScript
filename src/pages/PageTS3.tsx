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
        &#125;
      </code>
      <p>Para compilar el proyecto, se ejecuta, desde la terminal, el código:</p>
      <code className="code-block">npx tsc</code>
      <p>Para evitar la compilación manual y continua, se ejecuta el comando:</p>
      <code className="code-block">npx tsc --watch</code>
    </section>
    </>
  );
}

export { PageTS3 }