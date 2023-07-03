function PageTS12() {
  return (
    <>
    <section>
      <h2>Interfaces.</h2>
      <p>Permiten definir objetos o clases. Son muy similares a los <b>literal types</b>.</p>
      <p>Las diferencias entre la instrucción <b>type</b> (que es la instrucción con la que se definen literal types) y la instrucción <b>interface</b> (que es con la que se definen las interfaces), son las siguientes:</p>
      <ul>
        <li>Con <b>type</b> se pueden definir tipos primitivos o directos, practicamente se puenden definir en una sola línea de código. En cambio con <b>interface</b> se necesita definir todo un cuerpo, un conjunto de atributos de valores.</li>
        <div className="block-duo">
          <div>
            <code className="code-block">
              type Sizes = 'S' | 'M' | 'L' | 'XL';<br/>
              type userId = string | number;
            </code>
          </div>
          <div>
            <code className="code-block">
              interface Product &#123;<br/>
              &emsp;id: string | number;<br/>
              &emsp;createdAt: Date;<br/>
              &emsp;size?: 'S' | 'M' | 'L';<br/>
              &#125;
            </code>
          </div>
        </div>
        <li>A diferencia de los <b>types</b>, las <b>interfaces</b> se pueden extender de otras interfaces, por lo que se pueden heredar los tipos de una interfaz distinta. Además a las interfaces se le pueden agregar campos extra después de ser creadas.</li>
        <div className="block-duo">
          <div>
            <p>Extendiendo con literal types:</p>
            <code className="code-block">
              type Animal = &#123;<br/>
              &emsp;name: string;<br/>
              &#125;<br/><br/>
              type Bear = Animal & &#123; <br/>
              &emsp;honey: boolean ;<br/>
              &#125;<br/><br/>
              const bear = getBear();<br/>
              bear.name;<br/>
              bear.honey;
            </code>
          </div>
          <div>
            <p>Extendiendo con interfaces:</p>
            <code className="code-block">
              interface Animal &#123;<br/>
              &emsp;name: string;<br/>
              &#125;<br/><br/>
              interface Bear extends Animal &#123;<br/>
              &emsp;honey: boolean;<br/>
              &#125;<br/><br/>
              const bear = getBear();<br/>
              bear.name;<br/>
              bear.honey;
            </code>
          </div>
        </div>
        <div className="block-duo">
          <div>
            <p>Añadiendo nuevos campos con literal types:</p>
            <code className="code-block">
              type Window = &#123;<br/>
              &emsp;title: string;<br/>
              &#125;<br/><br/>
              type Window = &#123;<br/>
              &emsp;ts: TypeScriptAPI;<br/>
              &#125;<br/><br/>
              <span className="opacity-70">// Error: Duplicate identifier 'Window'.</span>
            </code>
          </div>
          <div>
            <p>Añadiendo nuevos campos con Interfaces:</p>
            <code className="code-block">
              interface Window &#123;<br/>
              &emsp;title: string<br/>
              &#125;<br/><br/>
              interface Window &#123;<br/>
              &emsp;ts: TypeScriptAPI<br/>
              &#125;<br/><br/>
              const src = 'const a = "Hello World"';<br/>
              window.ts.transpileModule(src, {});
            </code>
          </div>
        </div>
      </ul>
      {/* Interfaces complejas. */}
      <div>
        <h3>Interfaces complejas.</h3>
        <p>Muchas veces las interfaces pueden tener el mismo nombre de clases, por este motivo es recomendable agregar el sufijo Interface a las interfaces.</p>
        <code className="code-block">
          class Person &#123;<br/>
          &emsp;...<br/>
          &#125;<br/><br/>
          interface PersonInterface &#123;<br/>
          &emsp;...<br/>
          &#125;
        </code>
        <p>Para manejar los datos, es recomendable dividirlos en distintos archivos y separar sus responsabilidades para hacer el código más mantenible y más legible.</p>
        <p className="italic">Recordatorio: los archivos de modelado de datos se deben llamar de la siguiente forma: <u>nombre</u><b>.model.ts</b> y a los archivos que van a tratar dichos datos de la siguiente manera: <u>nombre</u><b>.service.ts</b>. A su vez, los archivos que van a hacer uso de estos servicios deben llamarse <b>service.ts</b></p>
      </div>
      {/* Extender interfaces. */}
      <div>
        <h3>Extender interfaces.</h3>
        <p>Con la herencia, se pueden extender distintos campos como en la programación orientada a objetos.</p>
        <code className="code-block">
          interface Animal &#123;<br/>
          &emsp;name: string;<br/>
          &#125;<br/><br/>
          interface Bear extends Animal &#123;<br/>
          &emsp;honey: boolean;<br/>
          &#125;<br/><br/>
          const bear = getBear() <br/>
          bear.name<br/>
          bear.honey
        </code>
        <p>Sin la herencia, lo que deberíamos hacer es repetir código en cada modelo:</p>
        <code className="code-block bg-transparent-false">
          <p className="text-center">category-model-ts</p>
          export interface Category &#123;<br/>
          <b className="text-lg">
          &emsp;id: string | number;<br/>
          &emsp;createdAt: Date;<br/>
          &emsp;updatedAt: Date;<br/>
          </b>
          &emsp;name: string;<br/>
          &#125;
        </code>
        <code className="code-block bg-transparent-false">
          <p className="text-center">products.model.ts</p>
          import &#123; Category &#125; from "../category/category.model";<br/>
          export type Sizes = 'S' | 'M' | 'L' | 'XL'<br/>
          export interface Product &#123;<br/>
          <b className="text-lg">
          &emsp;id: string | number;<br/>
          &emsp;createdAt: Date;<br/>
          &emsp;updatedAt: Date;<br/>
          </b>
          &emsp;title: string;<br/>
          &emsp;stock: number;<br/>
          &emsp;size: Sizes;<br/>
          &emsp;category: Category;<br/>
          &#125;
        </code>
        <code className="code-block bg-transparent-false">
          <p className="text-center">user.model.ts</p>
          export interface User &#123;<br/>
          <b className="text-lg">
          &emsp;id: string | number;<br/>
          &emsp;createdAt: Date;<br/>
          &emsp;updatedAt: Date;<br/>
          </b>
          &emsp;username: string;<br/>
          &emsp;role: admin | seller | customer;<br/>
          &#125;
        </code>
        <p>Como se muestra en los ejemplos, en todos los modelos se repiten los campos de id, createdAt y updatedAt.</p>
        <p>Para implementar la herencia, se crearía otra interface que contenga con los campos repetidos y utilizando la palabra reservada <b>extends</b>, se anexan los campos para evitar colocar los campos repetidos, ejemplo:</p>
        <code className="code-block bg-transparent-true">
          <p className="text-center">base.model.ts</p>
          export interface <u>BaseModel</u> &#123;<br/>
          <b className="text-lg">
          &emsp;id: string | number;<br/>
          &emsp;createdAt: Date;<br/>
          &emsp;updatedAt: Date;<br/>
          </b>
          &#125;
        </code>
        <code className="code-block bg-transparent-true">
          <p className="text-center">category-model-ts</p>
          import &#123; Base &#125; from "../base.model";<br/>
          export interface Category <b className="text-lg">extends <u>BaseModel</u></b> &#123;<br/>
          &emsp;name: string;<br/>
          &#125;
        </code>
        <code className="code-block bg-transparent-true">
          <p className="text-center">products.model.ts</p>
          import &#123; Category &#125; from "../category/category.model";<br/>
          export type Sizes = 'S' | 'M' | 'L' | 'XL'<br/>
          export interface Product <b className="text-lg">extends <u>BaseModel</u></b> &#123;<br/>
          &emsp;title: string;<br/>
          &emsp;stock: number;<br/>
          &emsp;size: Sizes;<br/>
          &emsp;category: Category;<br/>
          &#125;
        </code>
        <code className="code-block bg-transparent-true">
          <p className="text-center">user.model.ts</p>
          export interface User <b className="text-lg">extends <u>BaseModel</u></b> &#123;<br/>
          &emsp;username: string;<br/>
          &emsp;role: admin | seller | customer;<br/>
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

export { PageTS12 }