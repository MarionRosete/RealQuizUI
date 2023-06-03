/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {DarkMode} from '../../helper/DarkMode';
import Button from '../elements/Button';
import {
  EllipsisIcon,
  PencilIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon} from '../icons';
import PopoverComponent from '../popover';
import Input from '../elements/Input';

const initEditState = {
  open: false,
  name: '',
  description: '',
};
const QuizCard = ({quiz, handleView, handleDelete}) => {
  const [edit, setEdit]=useState(initEditState);
  const QandAPopoverContents = [
    {
      name: 'View',
      description: 'View quiz questions and answers',
      onClick: handleView,
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
      onClick: handleDelete,
      icon: ()=> <DeleteIcon/>,
    },
  ];
  return (
    <div className={`
    border
    border-inherit
    p-6 
    rounded-md
    ${DarkMode?'shadow-[#2E638B]':'shadow-gray-500/50'}
    `
    }
    >
      <div className='flex  justify-between text-xl font-bold'>
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
        <div className='cursor-pointer hover:color-[#535bf2]' >
          <PopoverComponent
            data={quiz}
            ButtonToClick={<EllipsisIcon/>}
            Content={QandAPopoverContents}
          />
        </div>
      </div>
      <div className='p-1 text-slate-500 text-sm '>
        {edit.open?
          <Input
            type={'text'}
            placeholder={'Name'}
            defaultValue={quiz.description}
            onChange={(e)=>
              setEdit(
                  {...edit,
                    description: e.target.value},
              )
            }
          />:quiz.description}
      </div>
      <div className='mt-3'>
        <Button
          Icon={<PencilIcon/>}
          content={'View'}
        />
      </div >
    </div>
  );
};


export default QuizCard;
