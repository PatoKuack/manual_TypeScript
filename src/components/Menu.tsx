import { CreateButton } from './CreateButton';
import { useValues } from '../hooks/useValues.tsx';
import { NavLink } from 'react-router-dom';

function Menu() {

  const {
    showMenu, 
    setShowMenu,
    syllabus1,
    syllabus2,
  } = useValues();

  const activeStyle = 'text-yellow-600 uderline underline-offset-4';

  return (
    <>
      <CreateButton 
        className='absolute left-2 top-4 w-12 hover:bg-emerald-700 border-2 border-current border-solid'
        content='>'
        type='button'
        title='Menú'
        onClick={()=>setShowMenu(!showMenu)}
      />
      <div className="relative w-fit">
        <nav className={`absolute right-full w-max h-[calc(100vh-50px)] max-w-[75vw] bg-emerald-800 border-2 border-l-0 border-current border-solid rounded-r-2xl transition-transform z-10 sm:max-w-xs sm:h-[calc(100vh-70px)] lg:h-[calc(100vh-75px)] ${!showMenu && 'translate-x-full'}`}>
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
          </ol>
        </nav>
      </div>
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
        className={({ isActive }) => isActive ? props.activeStyle : undefined }
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
              className={({ isActive }) => isActive ? props.activeStyle : undefined }
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