import React, {useState, useContext} from 'react';
import TextArea from '../../component/elements/TextArea';
import RadioButton from '../../component/elements/RadioButton';
import Button from '../../component/elements/Button';
import {TeacherStateContext} from '../../globalstate/TeacherContext';

const initData= {
  id: null,
  question: '',
  choice1: null,
  choice2: null,
  choice3: null,
  choice4: null,
  answer: null,
};
const QandAContents = () => {
  const {quiz, QandA, handleEditCreateQandA} = useContext(TeacherStateContext);
  const [input, setInput] = useState([...QandA]);

  const handleQuestion = (e, key) => {
    const arr = [...input];
    arr[key] = {...input[key], question: e.target.value};
    setInput(arr);
  };

  const handleAnswer = (e, key) => {
    const arr = [...input];
    arr[key] = {...input[key], answer: e.target.value};
    setInput(arr);
  };

  const handleChoice = (e, key, choice) => {
    const arr = [...input];
    arr[key] = {...input[key], [choice]: e.target.value, code: quiz.id};
    setInput(arr);
  };

  const handleAddItem = () => {
    setInput([...input, initData]);
  };
  return (
    <div className='flex flex-col mt-7 min-h-full '>
      <div
        id='qanda'
        className="space-y-10
        overflow-y-auto
        h-[420px]
        w-full
        snap-mandatory snap-y"
      >
        {input.map((data, key)=>
          <div key={key} className='space-y-3 mr-2 ml-2 snap-center'>
            <div className='flex gap-x-5 items-center'>
              <span className='w-4 font-extrabold'>{key+1}.</span>
              <TextArea
                value={data.question?data.question:''}
                placeholder={'Question'}
                rows={'5'}
                onChange={(e)=>handleQuestion(e, key)}
              />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                value={1}
                checked={data.answer===1?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice1?data.choice1:''}
                placeholder={'Choice A'}
                rows={'2'}
                onChange={(e)=>handleChoice(e, key, 'choice1')}
              />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                value={2}
                checked={data.answer===2?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice2?data.choice2:''}
                placeholder={'Choice B'}
                rows={'2'}
                onChange={(e)=>handleChoice(e, key, 'choice2')}
              />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                value={3}
                checked={data.answer===3?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice3?data.choice3:''}
                placeholder={'Choice 3'}
                rows={'2'}
                onChange={(e)=>handleChoice(e, key, 'choice3')}
              />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                value={4}
                checked={data.answer===4?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice4?data.choice4:''}
                placeholder={'Choice 4'}
                rows={'2'}
                onChange={(e)=>handleChoice(e, key, 'choice4')}
              />
            </div>
          </div>,
        )}
      </div>
      <div className='flex  justify-end items-end space-x-5 mt-6'>
        <Button
          onClick={handleAddItem}
          content={'Add item'}
          size={'small'}
        />
        <Button
          content={'Submit'}
          size={'small'}
          onClick={()=>handleEditCreateQandA(input)}
        />
      </div>
    </div>
  );
};

export default QandAContents;
