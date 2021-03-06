import PrimaryHeading from "../../../components/common/Header/PrimaryHeading";
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx';
import Link from 'next/link';
export default function quizzes() {
  return (
    <>
      <BaseLayout>
        <PrimaryHeading heading="Quiz"/>

        <Link href='quiz/create-quiz'>
            <a  className='blueBtn'>
               <img  className="mt-1" src="/imgs/svgs/OptionPlus.svg"></img>
               Create
            </a>
        </Link>
       

    
    
      </BaseLayout>
    </>
  )
}
