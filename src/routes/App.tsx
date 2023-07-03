import { NotFound } from '../pages/NotFound';
import { Layout } from '../containers/Layout';
import { Manual } from '../components/Manual';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Layout>
      <HashRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Manual />}></Route>
          <Route path='/:slug' element={<Manual />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  )
}

export default App;

/* 
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/

https://www.arahansen.com/how-children-types-work-in-react-18-and-typescript-4/
 */