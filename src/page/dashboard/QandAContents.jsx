import React, {useState, useContext} from 'react';
import TextArea from '../../component/elements/TextArea';
import RadioButton from '../../component/elements/RadioButton';
import Button from '../../component/elements/Button';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import {useAddQandA} from '../../queryhooks/qanda';

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
  const {quiz, QandA} = useContext(TeacherStateContext);
  const [editQandA, setQandA] = useState([...QandA]);
  const {mutate}= useAddQandA();

  const handleQuestion = (e, key) => {
    const arr = [...editQandA];
    arr[key] = {...editQandA[key], question: e.target.value};
    setQandA(arr);
  };

  const handleAnswer = (e, key) => {
    const arr = [...editQandA];
    arr[key] = {...editQandA[key], answer: e.target.value};
    setQandA(arr);
  };

  const handleChoice = (e, key, choice) => {
    const arr = [...editQandA];
    arr[key] = {...editQandA[key], [choice]: e.target.value, code: quiz.id};
    setQandA(arr);
  };

  const handleAddItem = () => {
    setQandA([...editQandA, initData]);
  };
  const handleSubmitQuiz = () => {
    mutate(editQandA);
  };
  return (
    <div className='mt-10 '>
      <div className='mt-5 mb-5'>
        <button onClick={handleAddItem}>
          Add item
        </button>
      </div>
      <div
        id='qanda'
        className='space-y-10 overflow-y-auto h-80 snap-mandatory snap-y'
      >
        {editQandA.map((data, key)=>
          <div key={key} className=' space-y-3 mr-2 ml-2 snap-center'>
            <div className='flex gap-x-3 items-center'>
              {key+1}.
              <TextArea
                value={data.question?data.question:''}
                placeholder={'Question'}
                rows={'4'}
                onChange={(e)=>handleQuestion(e, key)}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={1}
                checked={data.answer===1?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice1?data.choice1:''}
                placeholder={'Choice A'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choice1')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={2}
                checked={data.answer===2?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice2?data.choice2:''}
                placeholder={'Choice B'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choice2')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={3}
                checked={data.answer===3?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice3?data.choice3:''}
                placeholder={'Choice 3'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choice3')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={4}
                checked={data.answer===4?true:null}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                value={data.choice4?data.choice4:''}
                placeholder={'Choice 4'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choice4')}
              />
            </div>
          </div>,
        )}
      </div>
      <div className='mt-5'>
        <Button
          content={'Submit'}
          onClick={handleSubmitQuiz}
        />
      </div>
    </div>
  );
};

export default QandAContents;
