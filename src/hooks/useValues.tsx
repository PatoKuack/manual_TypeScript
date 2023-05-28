import {useState} from 'react';
import {PageTS1} from '../pages/PageTS1';
import {PageTS2} from '../pages/PageTS2';
import {PageTS3} from '../pages/PageTS3';
import {PageTS4} from '../pages/PageTS4';
import {PageTS5} from '../pages/PageTS5';
import {PageTS6} from '../pages/PageTS6';
import {PageTS7} from '../pages/PageTS7';
import {PageTS8} from '../pages/PageTS8';
import {PageTS9} from '../pages/PageTS9';
import {PageTS10} from '../pages/PageTS10';

function useValues() {

  const [ showMenu, setShowMenu ] = useState(true);

  /* Para declarar items solo de debe tener la precaución de colocar un array vacío en el subitem:[] */
  /* Para declarar un subitem se debe colocar el item padre con un path:'', los nombres de los subitems en el array del subitem:['x', 'y'] y se le coloca en content:<></> */
  /* Los subitems se colocan con un subitem:[''] y se debe tener cuidado al nombrar el path ya que debe coincidir con el string de la variable text cambiando ñ por n, quitando acentos, colocando todo en minúsculas y cambiando espacios por guiones altos */
  const syllabus1 = [
    {id:1, path:'introduccion', text:'Introducción', subitem: [], content: <PageTS1/>},
    {id:2, path:'instalacion', text:'Instalación', subitem: [], content: <PageTS2/>},
    {id:3, path:'compilador', text:'Compilador', subitem: [], content: <PageTS3/>},
    {id:4, path:'bugs', text:'Bugs', subitem: [], content: <PageTS4/>},
  ];
  const syllabus2 = [
    {id:5, path:'tipado', text:'Tipado', subitem: [], content: <PageTS5/>},
    {id:6, path: '', text:'Primitivos', subitem: ['Numbers', 'Booleans', 'Strings', 'Arrays'], content: <></>},
    {id:7, path: 'numbers', text:'Numbers', subitem: [''], content: <PageTS6/>},
    {id:8, path: 'booleans', text:'Booleans', subitem: [''], content: <PageTS7/>},
    {id:9, path: 'strings', text:'Strings', subitem: [''], content: <PageTS8/>},
    {id:10, path: 'arrays', text:'Arrays', subitem: [''], content: <PageTS9/>},
  ]

  return {
    showMenu, 
    setShowMenu,
    syllabus1,
    syllabus2,
  }
}

export { useValues }
