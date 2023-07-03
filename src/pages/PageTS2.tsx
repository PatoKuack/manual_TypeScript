function PageTS2() {
  return (
    <>
    <section>
      <h2>Instalación.</h2>
      <p>TypeScript se instala por proyecto (no de forma global), es decir, se instala como una dependencia de desarrollo.</p>
      <p>Primero se inicializa el proyecto en git y en npm.</p>
      <code className="code-block">
        git init<br/>
        npm init
      </code>
      <p>Después se instala TypeScript:</p>
      <code className="code-block">npm install typescript --save-dev</code>
      <p>Se comprueba que se ha instalado correctamente:</p>
      <code className="code-block">npx tsc --version</code>
      <p>Se agrega el .gitignore (se puede utilizar <a href="https://www.toptal.com/developers/gitignore?templates=windows,macos,linux,node" target="_blank" rel="noopener noreferrer">gitignore.io</a>).</p>
      <p>Se configura el .editorconfig para que todo el proyecto tenga el mismo formato:</p>
      <code className="code-block">
        &#60;# Editor configuration, see https://editorconfig.org<br/>
        root = true<br/><br/>
        [*]<br/>
        charset = utf-8<br/>
        indent_style = space<br/>
        indent_size = 2<br/>
        insert_final_newline = true<br/>
        trim_trailing_whitespace = true<br/><br/>
        [*.ts]<br/>
        quote_type = single<br/><br/>
        [*.md]<br/>
        max_line_length = off<br/>
        trim_trailing_whitespace = false&#62;
        </code>
      <p>Para que funcione el .editorconfig, en VisualStudioCode se instala la siguiente extensión: <a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener noreferrer">EditorConfig for VSCode</a></p>
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

export { PageTS2 }