export const PageTS16 = () => {
  return (
    <>
    <section>
      <h2>Props y Children.</h2>
      {/* Objeto props. */}
      <div>
        <h3>Objeto props.</h3>
        <p>Las props son un objeto al que se le tipean sus componentes tal como cualquier otro objeto de TypeScript.</p>
        <code className="code-block">
          <span className="opacity-70">// se indica que la función recibirá una props denominada image, la cual será un string.</span><br/>
          export const myFunct = (<b className="text-lg">props &#123;image: string&#125;</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;<span className="opacity-70">// se utiliza la propiedad image.</span><br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">props.image</b>&#125; /&#62;<br/>
          &#125;
        </code>
        <p>Una forma más mantenible de tener varias propiedades, es juntando todas las propiedades en un tipo de TS o en una interface de TS.</p>
        <code className="code-block">
          <u>type</u> Props = &#123; image: string &#125;;<br/>
          export const myFunct = (<b className="text-lg">props: Props</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">props.image</b>&#125; /&#62;<br/>
          &#125;
        </code>
        <p>También se pueden pasar directamente los valores para evitar utilizar las propiedades colocando props.:</p>
        <code className="code-block">
          <u>interface</u> Props = &#123; image: string &#125;;<br/>
          export const myFunct = (<b className="text-lg">&#123; image &#125;: Props</b>): JSX.Element =&#62; &#123;<br/>
          &emsp;return &#60;img src=&#123;<b className="text-lg">image</b>&#125; /&#62;<br/>
          &#125;
        </code>
      </div>
      {/* Objeto children. */}
      <div>
        <h3>Objeto children.</h3>
        <p>Children es una propiedad que viene dentro del objeto props. Se puede llamar de diferentes maneras.</p>
        <p>Usando children directamente:</p>
        <code className="code-block">
          type Props = &#123;<br/>
          <span className="opacity-70">// el children puede contener un string, un elementoJSX, un array de elementosJSX o una función que retorna un elementoJSX.</span><br/>
          &emsp;children: string | JSX.Element | JSX.Element[] | () =&#62; JSX.Element<br/>
          &#125;<br/><br/>
          const YourComponent = (&#123;children&#125; : Props) =&#62; &#123;<br/>
          &emsp;return children<br/>
          &#125;
        </code>
        <code className="code-block">
          <p className="opacity-70">// forma en que se enviaría una función en el contenido children.</p>
          &#60;YourFirstComponent&#62;<br/>
          &emsp;&#123;() =&#62; &#60;div&#62;&#123;myScopedVariableReference&#125;&#60;/div&#62;&#125;<br/>
          &#60;/YourFirstComponent&#62;
        </code>
        <p>Usando PropsWithChildren:</p>
        <p>El tipo React.PropsWithChildren toma su componente prop y devuelve una unión de tipos con los elementos secundarios correctamente escritos. No se necesita trabajo adicional.</p>
        <code className="code-block">
          import &#123; PropsWithChildren &#125; from 'react';<br/><br/>
          type MyProps = &#123;<br/>
          &emsp;name: 'mi propiedad'<br/>
          &#125;<br/><br/>
          export const MyFunct = (props: PropsWithChildren&#60;MyProps&#62;) =&#62; &#123;<br/>
          &emsp;return props.children;<br/>
          &#125;
        </code>
        <p>En el ejemplo anterior, al pasar PropsWithChildren al elemento prop MyProps, se obtiene el elemento secundario tipado internamente.</p>
        <p>En la mayoría de los casos, esta es la forma recomendada de typear la prop children porque requiere menos repeticiones y la propiedad children se escribe implícitamente.</p>
        <p>Usando ReactNode:</p>
        <p>En los casos en los que se deba tipar explícitamente la propiedad children, se puede usar el tipo ReactNode, así se tipa directamente la propiedad children en vez d utilizar PropsWithChildren.</p>
        <code className="code-block">
        import &#123; ReactNode &#125; from 'react';<br/>
        type MyProps = &#123;<br/>
        &emsp;name: 'mi propiedad'<br/>
        &emsp;children: ReactNode<br/>
        &#125;<br/><br/>
        export const MyFunc = (props: MyProps) =&#62; &#123;<br/>
        &emsp;return props.children<br/>
        &#125;
        </code>
      </div>
    </section>
    <footer>
      <section>
        <h2>Referencias:</h2>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/" target="_blank" rel="noopener noreferrer">Typing Component Props.</a>
        <a href="https://www.benmvp.com/blog/typescript-react-props-interfaces-type-aliases/" target="_blank" rel="noopener noreferrer">Cuando usar type o interface en las props.</a>
        <a href="https://blog.logrocket.com/using-react-children-prop-with-typescript/" target="_blank" rel="noopener noreferrer">Propiedad children de React con TypeScript.</a>
        <a href="https://www.arahansen.com/how-children-types-work-in-react-18-and-typescript-4/" target="_blank" rel="noopener noreferrer">How Children Types Work In React 18 And TypeScript 4.</a>
      </section>
    </footer>
    </>
  );
}
