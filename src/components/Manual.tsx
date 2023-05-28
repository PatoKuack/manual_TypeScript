import { useParams } from 'react-router-dom';
import { useValues } from '../hooks/useValues.tsx';

function Manual() {
  const {
    syllabus1,
    syllabus2,
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
    }
    if(!content) {
      return(<>Not Found</>)
    }
    return(content.content)
  }

  return (
    <main className='p-8'>
      {findContent()}
    </main>
  );
}

export { Manual }