import { useParams } from 'react-router-dom';
import { useValues } from '../hooks/useValues.tsx';

function Manual() {
  const {
    syllabus1,
    syllabus2,
    syllabus3,
    syllabus4,
  } = useValues();
  const { slug } = useParams();

  function findContent() {
    let content;
    if(slug===undefined) {
      content = syllabus1[0];
    } else if(syllabus1.find(item => item.path === slug)) {
      content = syllabus1.find(item => item.path === slug);
    }else if(syllabus2.find(item => item.path === slug)) {
      content = syllabus2.find(item => item.path === slug);
    }else if(syllabus3.find(item => item.path === slug)) {
      content = syllabus3.find(item => item.path === slug);
    }else if(syllabus4.find(item => item.path === slug)) {
      content = syllabus4.find(item => item.path === slug);
    }
    if(!content) {
      return(<>Not Found</>)
    }
    return(content.content)
  }

  return (
    <main className='p-8 max-w-screen h-[calc(100vh-50px)] max-h-[calc(100vh-50px)] sm:max-h-[calc(100vh-70px)] sm:h-[calc(100vh-70px)] lg:max-h-[calc(100vh-75px)] lg:h-[calc(100vh-75px)] overflow-y-auto'>
      {findContent()}
    </main>
  );
}

export { Manual }
