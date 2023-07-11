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
import {PageTS11} from '../pages/PageTS11';
import {PageTS12} from '../pages/PageTS12';
import {PageTS13} from '../pages/PageTS13';
import {PageTS14} from '../pages/PageTS14';
import {PageTS15} from '../pages/PageTS15';
import {PageTS16} from '../pages/PageTS16';
import {PageTS17} from '../pages/PageTS17';
import {PageTS18} from '../pages/PageTS18';
import {PageTS19} from '../pages/PageTS19';
import {PageTS20} from '../pages/PageTS20';
import {PageTS21} from '../pages/PageTS21';
import {PageTS22} from '../pages/PageTS22';
import {PageTS23} from '../pages/PageTS23';
import {PageTS24} from '../pages/PageTS24';

function useValues() {

  const [ hideMenu, setHideMenu ] = useState(true);

  /* Los subitem se colocan con un subitem:[''] y se debe tener cuidado al nombrar el path ya que debe coincidir con el string de la variable text cambiando ñ por n, quitando acentos, colocando todo en minúsculas y cambiando espacios por guiones altos: Piña y Cúrcuma = pina-y-curcuma */
  /* Para declarar items solo de debe tener la precaución de colocar un array vacío en el subitem:[] */
  /* Para declarar un subitem se debe colocar el item padre con un path:'', los nombres de los subitems en el array del subitem:['x', 'y'] y se le coloca en content:<></> */
  const syllabus1 = [
    {id:1, path:'introduccion', text:'Introducción', subitem:[], content:<PageTS1/>},
    {id:2, path:'instalacion', text:'Instalación', subitem:[], content:<PageTS2/>},
    {id:3, path:'compilador', text:'Compilador', subitem:[], content:<PageTS3/>},
    {id:4, path:'bugs', text:'Bugs', subitem:[], content:<PageTS4/>},
  ];
  const syllabus2 = [
    {id:5, path:'tipado', text:'Tipado', subitem:[], content:<PageTS5/>},
    {id:6, path:'primitivos', text:'Primitivos', subitem:[], content:<PageTS6/>},
    {id:7, path:'especiales', text:'Especiales', subitem:[], content:<PageTS7/>},
    {id:10, path:'avanzados', text:'Avanzados', subitem:[], content:<PageTS10/>},
  ]
  const syllabus3 = [
    {id:8, path:'funciones', text:'Funciones', subitem:[], content:<PageTS8/>},
    {id:11, path:'parametros', text:'Parámetros', subitem:[], content:<PageTS11/>},
    {id:12, path:'interfaces', text:'Interfaces', subitem:[], content:<PageTS12/>},
    {id:13, path:'utility_types', text:'Utility Types', subitem:[], content:<PageTS13/>},
    {id:9, path:'librerias', text:'Librerias', subitem:[], content:<PageTS9/>},
  ]
  const syllabus4 = [
    {id:14, path:'r-instalacion', text:'R Instalación', subitem:[], content:<PageTS14/>},
    {id:15, path:'r-componentes', text:'R Componentes', subitem:[], content:<PageTS15/>},
    {id:16, path:'r-props-y-children', text:'R Props y Children', subitem:[], content:<PageTS16/>},
    {id:17, path:'r-estados', text:'R Estados', subitem:[], content:<PageTS17/>},
    {id:18, path:'r-minimas-representaciones', text:'R Mínimas representaciones', subitem:[], content:<PageTS18/>},
    {id:19, path:'r-eventos', text:'R Eventos', subitem:[], content:<PageTS19/>},
    {id:20, path:'r-tipos-para-referencias', text:'R Tipos para referencias', subitem:[], content:<PageTS20/>},
    {id:21, path:'r-observables', text:'R Observables', subitem:[], content:<PageTS21/>},
    {id:22, path:'r-componentes-extendidos', text:'R Componentes extendidos', subitem:[], content:<PageTS22/>},
    {id:23, path:'r-tipos-globales', text:'R Tipos globales', subitem:[], content:<PageTS23/>},
    {id:24, path:'r-librerias', text:'R Librerías', subitem:[], content:<PageTS24/>},
  ]

  // los syllabus se utilizan en Manual y Menu
  return {
    hideMenu,
    setHideMenu,
    syllabus1,
    syllabus2,
    syllabus3,
    syllabus4,
  }
}

export { useValues }
