import React, {useState, useContext} from 'react';
import TextArea from '../../component/elements/TextArea';
import RadioButton from '../../component/elements/RadioButton';
import Button from '../../component/elements/Button';
import {GlobalStateContext} from '../../globalstate';
import {useAddQandA} from '../../queryhooks/qanda';

const initData= {
  question: '',
  choice1: null,
  choice2: null,
  choice3: null,
  choice4: null,
  answer: null,
};
const QandAContents = () => {
  const {quizData, QandA} = useContext(GlobalStateContext);
  const [qanda, setQandA] = useState([...QandA]);
  console.log(qanda);
  const {mutate}= useAddQandA();

  const handleQuestion = (e, key) => {
    const arr = [...qanda];
    arr[key] = {...qanda[key], question: e.target.value};
    setQandA(arr);
  };

  const handleAnswer = (e, key) => {
    const arr = [...qanda];
    arr[key] = {...qanda[key], answer: e.target.value};
    setQandA(arr);
  };

  const handleChoice = (e, key, choice) => {
    const arr = [...qanda];
    arr[key] = {...qanda[key], [choice]: e.target.value, code: quizData.id};
    setQandA(arr);
  };

  const handleAddItem = () => {
    setQandA([...qanda, initData]);
  };
  const handleSubmitQuiz = () => {
    mutate(qanda);
  };
  return (
    <div className='mt-10 '>
      <div className='mt-5 mb-5'>
        <button onClick={handleAddItem}>
          Add item
        </button>
      </div>
      <div className='space-y-10 overflow-y-auto h-72 snap-mandatory snap-y'>
        {qanda.map((data, key)=>
          <div key={key} className='space-y-3 snap-center'>
            <div className='flex gap-x-3 items-center'>
              {key+1}.
              <TextArea
                value={data.question?data.question:''}
                placeholder={'Question'}
                rows={'2'}
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
