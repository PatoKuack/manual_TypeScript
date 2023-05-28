import { NotFound } from '../pages/NotFound';
import { Manual } from '../components/Manual';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <HashRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Manual />}></Route>
        <Route path='/:slug' element={<Manual />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;

/* 
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/

https://francocarrara.notion.site/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81
 */