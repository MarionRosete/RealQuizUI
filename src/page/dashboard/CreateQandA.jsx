import React, {useState} from 'react';
import TextArea from '../../component/elements/TextArea';
import RadioButton from '../../component/elements/RadioButton';

const initData= {
  question: '',
  choiceA: null,
  choiceB: null,
  choiceC: null,
  choiceD: null,
  answer: null,
};
const CreateQandA = () => {
  const [qanda, setQandA] = useState([initData]);

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
    arr[key] = {...qanda[key], [choice]: e.target.value};
    setQandA(arr);
  };

  const handleAddItem = () => {
    setQandA([...qanda, initData]);
  };
  console.log(qanda);
  return (
    <div className='mt-10'>
      <div className='mt-5 mb-5'>
        <button onClick={handleAddItem}>
          Add item
        </button>
      </div>
      <div className='space-y-10'>
        {qanda.map((data, key)=>
          <div key={key} className='space-y-3'>
            <div className='flex gap-x-3 items-center'>
              {key+1}.
              <TextArea
                placeholder={'Question'}
                rows={'2'}
                onChange={(e)=>handleQuestion(e, key)}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={1}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                placeholder={'Choice A'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choiceA')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={2}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                placeholder={'Choice B'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choiceB')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={3}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                placeholder={'Choice 3'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choiceC')}
              />
            </div>
            <div className='flex gap-x-3 items-center'>
              <RadioButton
                value={4}
                onChange={(e)=>handleAnswer(e, key)}
                name={key}
              />
              <TextArea
                placeholder={'Choice 4'}
                rows={'1'}
                onChange={(e)=>handleChoice(e, key, 'choiceD')}
              />
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};

export default CreateQandA;
