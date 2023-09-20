import React, {useState, useContext, useEffect} from 'react';
import TextArea from '../../component/elements/TextArea';
import RadioButton from '../../component/elements/RadioButton';
import Button from '../../component/elements/Button';
import {TeacherStateContext} from '../../globalstate/TeacherContext';
import {SaveIcon} from '../../component/icons';
import MultipleChoice from './quiztype/MultipleChoice';
import Indentification from './quiztype/Indentification';
import Select from '../../component/elements/Select';



const quizTypes = [
  {value: 0, name: 'Select Quiz Type'},
  {value: 1, name: 'Multiple Choice'},
  {value: 2, name: 'Identification'},
];

const Multiple = {
  question: null,
  choice1: null,
  choice2: null,
  choice3: null,
  choice4: null,
  answer: null,
}

const Identification = {
  question: null,
  answer: null
}

const initData= {
  id: null,
  type:quizTypes[0],
  quiz: null
};

const QandAContents = () => {
  const {quiz, QandA, handleEditCreateQandA} = useContext(TeacherStateContext);
  const [input, setInput] = useState([{...initData}]);
  const [hasEmpty, setHasEmpty] = useState(false);

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
    arr[key] = {...input[key], [choice]: e.target.value};
    setInput(arr);
  };

  const handleAddItem = () => {
    setInput([...input, {...initData, code: quiz.id}]);
  };

  const handleQuizType = (e,ind) => {
    switch (e.value) {
      case 1:
        input[ind] = {
          type:e,
          quiz:Multiple,
        }
        setInput([...input])
        break;
      case 2:
        input[ind] = {
          type:e,
          quiz:Identification,
        }
        setInput([...input])
        break;
      default:
        input[ind] = {
          id: null,
          type:quizTypes[0],
          quiz: null
        }
        setInput([...input])
        break;
    }
      
  }

  const handleSubmit = () => {
    input.map((data)=>{
      if (
        !data.question||!data.choice1||
        !data.choice2||!data.choice3||
        !data.choice4||!data.answer
      ) {
        setHasEmpty(true);
      } else {
        setHasEmpty(false);
        handleEditCreateQandA(input)
      }
    })
  }

  return (
    <div style={{maxHeight:'50%', margin:0}}>
      <div
        id='qanda'
        className="space-y-10
        overflow-y-auto
        snap-mandatory snap-y
        "
        style={{maxHeight:'70vh', minHeight:'25vh', margin:0}}
      >
        {input.map((data, key)=>
        data.type.value===1?
        <div key={key} className='relative mr-2 ml-2 snap-center'>
          <div className='flex items-center'>
            <p className='mr-3'>
            {key+1}
            </p>
          
          <Select
            Lists={quizTypes}
            selected={data.type}
            setSelected={(e)=>handleQuizType(e,key)}
          />
            </div>
          <MultipleChoice
            key={key}
            data={data.quiz}
            handleQuestion={handleQuestion}
            handleChoice={handleChoice}
            handleAnswer={handleAnswer}
          />
          
        
          </div>
          :
          data.type.value===2?
          <div key={key} className=' mr-2 ml-2 snap-center'>
          <Select
            Lists={quizTypes}
            selected={data.type}
            setSelected={(e)=>handleQuizType(e,key)}
          />
          <Indentification
            key={key}
            data={data.quiz}
            handleAnswer={handleAnswer}
            handleQuestion={handleQuestion}
          />
          </div>
          :
          <div className="flex items-center">
          <p className='mr-3'>
          {key+1}
          </p>
          <Select
            Lists={quizTypes}
            selected={data.type}
            setSelected={(e)=>handleQuizType(e,key)}
          />
        
          </div>
        )}
      </div>
      <div className='flex  justify-end items-end space-x-5 mt-6'>
        <Button
          onClick={handleAddItem}
          content={'Add item'}
          size={'small'}
        />
        <Button
          content={'Save'}
          Icon={<SaveIcon size={'small'}/>}
          size={'small'}
          onClick={handleSubmit}
          disabled={hasEmpty}
        />
      </div>
    </div>
  );
};

export default QandAContents;
