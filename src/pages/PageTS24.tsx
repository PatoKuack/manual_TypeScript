export const PageTS24 = () => {
  return (
    <>
    <section>
      <h2>Librerías.</h2>
      {/* Librerías no-tipadas */}
      <div>
        <h3>Librerías no-tipadas.</h3>
        <p>Existen librerías que no tienen incluidss el tipado, así que no se pueden utilizar como se utilizarían normalmente en los proyectos con React, por esto se deben anexar o crear los tipos para usarlos en esas librerías.</p>
        <p>Por suerte existe el repositorio <b>Definitely Type</b> que es mantenido por la comunidad de desarrolladores, gracias a este repositorio los tipados ya estan creados para el 99% de las librerías. Tan solo se debería correr en la consola:</p>
        <code className="code-block"><b className="text-lg">npm install @types/</b><u>nombre de librería</u></code>
        <p>Para el resto de librerías cuyos tipados no existen en ningún lado, se puede crear su tipado manualmente, por ejemplo, la librería "lodash" no tiene tipado, por lo que tendría problemas con TypeScript y si no tubiera un tipado en el repositorio Definitely Type, se tendría que hacer los iguiente:</p>
        <p>Así se utiliza la librería:</p>
        <code className="code-block">
          import &#123; <u>random</u> &#125; from "<u>lodash</u>";<br/>
          const randomNum = () =&#62; random(1, 100);<br/>
          <span className="opacity-70">// obtiene una número aleatorio entre 1 y 100.</span>
        </code>
        <p>Se crea una librería, una carpeta llamada <b>@types</b>, dentro de esta se crean carpetas y archivos para cada una de las librerías no tipadas. Se pueden colocar los tipos de algún paquete que ya haya creado los tipos o se crean manualmente.</p>
        <p>Si se crea manualmente todo, entonces se crea dentro de la carpeta @types, una carpeta con el nombre de la librería y dentro de esta carpeta se crea un archivo con el nombre de la librería y con extensión <b>.d.ts</b>, este archivo será la definición de la librería.</p>
        <p>Dentro del archivo de extensión .d.ts, se crean las funciones y tipos para los métodos que se utilizarán de la librería.</p>
        <p>Ejemplo creando un tipo para el método random de la librería lodash:</p>
        <code className="code-block">
        <span className="opacity-70">// se tiene que colocar entre comillas el nombre con el que se importa la librería.</span><br/>
          declare module "<u>lodash</u>" &#123;<br/>
        <span className="opacity-70">// se sabe que el método recibe 2 numeros denominados en la documentación como lower y upper, y retorna 1 numero flotante.</span><br/>
          &emsp;export function <u>random</u>(lower: number, upper: number): number<br/>
          &#125;
        </code>
        <p>Para crear este tipo de tipados se debe conocer la librería para evitar conflictos.</p>
      </div>
      {/* Librerías y extensiones del objeto window. */}
      <div>
        <h3>Librerías y extensiones del objeto window.</h3>
        <p>Hay librerías de dependencias externas como los paquetes o librerías de Google Analitics, este tipo de scripts solamente se deben agregar al HTML y ya. Esto puede crear conflictos con TS porque ya que solo existe en el HTML, TS no tiene forma de saber que pasa en el HTML y se le debe inicar que esto existe y como se puede utilizar.</p>
        <p>Existen paquetes como los de Google Analitics que no están tipados y aunque hay algunos tipos que se encuentran en el repositorio Definitely Type, hay otros paquetes que no, para estos paquetes se crea dentro de la carpeta <b>@types</b> (y si aún no existe, se crea) una carpeta con el nombre del paquete y dentro de esta se crea un archivo de definición denominado <b>index.d.ts</b>.</p>
        <p>Como no se trata de una dependencia, sino que se quieren extender utilidades al objeto window, se utiliza un interface con window.</p>
        <p>Ejemplo del archivo de definición para el paquete Plausible:</p>
        <code className="code-block">
          <b className="text-lg">interface Window &#123;</b><br/>
          &emsp;<u>plausible</u>: (event: string) =&#62; void<br/>
          <b className="text-lg">&#125;</b>
        </code>
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
