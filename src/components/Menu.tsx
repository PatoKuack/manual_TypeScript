import { CreateButton } from './CreateButton';
import { useValues } from '../hooks/useValues.tsx';
import { NavLink } from 'react-router-dom';

function Menu() {

  const {
    hideMenu,
    setHideMenu,
    syllabus1,
    syllabus2,
    syllabus3,
    syllabus4,
  } = useValues();

  const activeStyle = 'uderline underline-offset-4 font-bold';

  return (
    <>
      <CreateButton
        className='absolute right-1 top-2 z-10 sm:right-2 sm:top-4'
        content='Menú'
        type='button'
        title='Menú'
        onClick={()=>setHideMenu(!hideMenu)}
      />

      <div
        className={`fixed w-screen h-screen top-0 left-0 bg-transparent-dark transition-colors z-0 ${hideMenu && 'bg-transparent pointer-events-none'}`}
        onClick={()=>setHideMenu(true)}
      ></div>

      <nav className={`fixed top-[50px] right-0 w-max max-w-[75vw] h-[calc(100vh-50px)] bg-shadow border-2 border-r-0 border-current border-solid rounded-l-2xl transition-transform z-10 sm:top-[70px] sm:max-w-xs sm:h-[calc(100vh-70px)] lg:top-[75px] lg:h-[calc(100vh-75px)] ${hideMenu && 'translate-x-full'}`}>
        <ol className='p-6 module'>
          <li>Introducción.
            <ol className='submodule'>
              {syllabus1.map( item =>
                <MenuItems
                  key={item.id}
                  id={item.id}
                  path={item.path}
                  text={item.text}
                  subitem={item.subitem}
                  content={item.content}
                  activeStyle={activeStyle}
                />
              )}
            </ol>
          </li>
          <li>Tipos de datos.
            <ol className='submodule'>
                {syllabus2.map( item =>
                  <MenuItems
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    text={item.text}
                    subitem={item.subitem}
                    content={item.content}
                    activeStyle={activeStyle}
                  />
                )}
              </ol>
          </li>
          <li>Funciones e interfaces.
            <ol className='submodule'>
                {syllabus3.map( item =>
                  <MenuItems
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    text={item.text}
                    subitem={item.subitem}
                    content={item.content}
                    activeStyle={activeStyle}
                  />
                )}
              </ol>
          </li>
          <li>React.
            <ol className='submodule'>
                {syllabus4.map( item =>
                  <MenuItems
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    text={item.text}
                    subitem={item.subitem}
                    content={item.content}
                    activeStyle={activeStyle}
                  />
                )}
              </ol>
          </li>
        </ol>
      </nav>
    </>
  );
}

interface FullName {
  key: number;
  id: number;
  path: string;
  text: string;
  subitem: string[];
  content: React.ReactNode;
  activeStyle: string;
}

function MenuItems(props: FullName){
  if(!props.subitem.length){
    return(
      <li><NavLink
        className={({ isActive }) => isActive ? props.activeStyle : 'no-underline' }
        to={props.path}
      >
        {props.text}.
      </NavLink></li>
    )
  } else if(props.subitem[0] === ''){
    return(<></>);
  } else {
    return(
      <li>
        {props.text}.
        <ol className='subsubmodule'>
          {props.subitem.map((item, index) =>
            <li
              key={`${props.id}.${index}`}
            ><NavLink
              className={({ isActive }) => isActive ? props.activeStyle : 'no-underline' }
              to={`/${item.toLowerCase().replace(' ', '-').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n')}`}
            >
              {item}.
            </NavLink></li>
          )}
        </ol>
      </li>
    );
  }
}

export { Menu }
