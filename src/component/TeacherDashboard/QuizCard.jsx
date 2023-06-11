/* eslint-disable react/prop-types */
import React, {useState, useContext} from 'react';
import {DarkMode} from '../../helper/DarkMode';
import Button from '../elements/Button';
import {
  EllipsisIcon,
  PencilIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon,
  CancelIcon,
  CheckIcon} from '../icons';
import PopoverComponent from '../popover';
import Input from '../elements/Input';
import TextArea from '../elements/TextArea';
import {TeacherStateContext} from '../../globalstate/TeacherContext';


const QuizCard = ({quiz}) => {
  const {handleEditQuiz,
    handleDeleteQuiz,
    handleOpenCreateQandA,
  }=useContext(TeacherStateContext);
  const initEditState = {
    open: false,
    name: quiz.name,
    description: quiz.description,
  };
  const [edit, setEdit]=useState(initEditState);
  const QandAPopoverContents = [
    {
      name: 'View',
      description: 'View quiz questions and answers',
      onClick: ()=> handleOpenCreateQandA(quiz),
      icon: ()=><ViewIcon/>,

    },
    {
      name: 'Edit',
      description: 'Edit quiz name and description',
      onClick: ()=>setEdit({...edit, open: true}),
      icon: ()=><EditIcon/>,
    },
    {
      name: 'Delete',
      description: 'Delete quiz and its questions and answers',
      onClick: handleDeleteQuiz,
      icon: ()=> <DeleteIcon/>,
    },
  ];
  const handleCloseEdit = () => {
    setEdit(initEditState);
  };
  return (
    <div className={`
    border
    border-inherit
    border-purple-600
    p-6 
    rounded-md
    ${DarkMode?'shadow-[#2E638B]':'shadow-gray-500/50'}
    `
    }
    >
      <div className='flex justify-end hover:color-[#535bf2]' >
        <PopoverComponent
          data={quiz}
          ButtonToClick={<EllipsisIcon/>}
          Content={QandAPopoverContents}
        />
      </div>
      <div className='m-2 text-xl font-bold'>
        {edit.open?
          <Input
            type={'text'}
            placeholder={'Name'}
            defaultValue={quiz.name}
            onChange={(e)=>
              setEdit(
                  {...edit,
                    name: e.target.value},
              )
            }
          />:quiz.name}
      </div>
      <div className={`m-2 
        ${DarkMode?'text-slate-300':'text-slate-600'} text-sm `}>
        {edit.open?
          <TextArea
            type={'text'}
            placeholder={'Description'}
            value={quiz.description}
            onChange={(e)=>
              setEdit(
                  {...edit,
                    description: e.target.value},
              )
            }
          />:quiz.description}
      </div>
      <div className='m-4 mt-6'>
        {edit.open?
        <div className='flex justify-end items-center gap-x-2'>
          <Button
            content={'Cancel'}
            size={'xsmall'}
            type={'danger-outlined'}
            Icon={<CancelIcon size={'small'}/>}
            onClick={handleCloseEdit}
          />
          <Button
            Icon={<CheckIcon size={'small'}/>}
            content={'Save'}
            size={'xsmall'}
            onClick={()=>{
              const payload = {
                id: quiz.id,
                name: edit.name,
                description: edit.description,
              };
              handleEditQuiz(payload);
            }}
          />
        </div>:
        <div className='flex justify-end'>
          <Button
            onClick={()=>handleOpenCreateQandA(quiz)}
            Icon={
              <PencilIcon
                size={'small'}
              />
            }
            content={'View'}
            size={'medium'}
            type={'def-contained'}
          />
        </div>
        }
      </div >
    </div>
  );
};


export default QuizCard;
