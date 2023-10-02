import React, { useState } from 'react'
import StepperInfo from '../../component/stepper/StepperInfo'
import StepperBreadcrumb from '../../component/stepper/StepperBreadcrumb'
import Input from '../../component/elements/Input'
import QuizInfo from '../../component/TeacherDashboard/CreateQuiz/QuizInfo'
import QuestionAndAnswer from '../../component/TeacherDashboard/CreateQuiz/QuestionAndAnswer'
import Button from '../../component/elements/Button'
import { useNavigate } from '@tanstack/react-location'

const steps = [
    {
        label: "Quiz info",
    },
    {
        label: "Question and answer",
    },
    {
        label: "Review info",
    }
]

const CreateQuizSteps = () => {
    const  navigate = useNavigate(); 
    const [active,setActive] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
       setActive(active+1);
    }


    const HandleCancel = () => {
        navigate({ to: '/dashboard'})

    }
  return (
   <div className='md:m-8 m-6 min-h-screen space-y-7'> 
        <div className='h-1/4'>
            <p className=' font-bold text-4xl mb-6'>
                Create quiz
            </p>
            <StepperBreadcrumb
                steps={steps}
                active={active}
            />
       </div>
        <div className='h-1/2'>
            <p  className=' font-bold text-2xl mb-2'>
                {steps[active-1].label}
            </p>
            <form onSubmit={handleSubmit}> 
                {
                active===1?
              
               
                <QuizInfo/>
                :
                active===2?
                <QuestionAndAnswer/>
                :
                <></>
                }  
            </form>
        </div>
        <div className='mt-6 space-x-2 items-center h-1/4'>
                    {
                    active > 1?
                        <Button
                            content={`Back: ${steps[active-1].label}`}
                            size={'small'}
                            type={'def-outlined'}
                            onClick={()=>setActive(active-1)}
                        />
                        :
                        <Button
                            content={'Cancel'}
                            size={'small'}
                            type={'def-outlined'}
                            onClick={HandleCancel}
                        />

                    }
                <Button
                    content={`Next: ${steps[active].label}`}
                    size={'small'}
                    onClick={handleSubmit}
                />
                </div>
    </div>
  )
}


export default CreateQuizSteps