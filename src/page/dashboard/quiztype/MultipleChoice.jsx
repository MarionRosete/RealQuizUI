import React from 'react'
import TextArea from '../../../component/elements/TextArea'
import RadioButton from '../../../component/elements/RadioButton'

const MultipleChoice = ({key,handleQuestion,handleAnswer,handleChoice,hasEmpty,data}) => {
  return (
        <>
            <div className='flex gap-x-5 items-center'>
            <TextArea
                value={data.question}
                placeholder={'Question'}
                rows={'5'}
                onChange={(e) => handleQuestion(e, key)}
                error={!data.question && hasEmpty}
                helper={hasEmpty && !data.question ? 'This field is required.' : null} />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                  value={1}
                  checked={data.answer === 1 ? true : null}
                  onChange={(e) => handleAnswer(e, key)}
                  name={key} />
              <TextArea
                  value={data.choice1}
                  placeholder={'Choice A'}
                  rows={'2'}
                  onChange={(e) => handleChoice(e, key, 'choice1')}
                  error={hasEmpty && !data.choice1}
                  helper={hasEmpty && !data.choice1 ? 'This field is required.' : null} />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                  value={2}
                  checked={data.answer === 2 ? true : null}
                  onChange={(e) => handleAnswer(e, key)}
                  name={key} />
              <TextArea
                  value={data.choice2}
                  placeholder={'Choice B'}
                  rows={'2'}
                  onChange={(e) => handleChoice(e, key, 'choice2')}
                  error={hasEmpty && !data.choice2}
                  helper={hasEmpty && !data.choice2 ? 'This field is required.' : null} />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                  value={3}
                  checked={data.answer === 3 ? true : null}
                  onChange={(e) => handleAnswer(e, key)}
                  name={key} />
              <TextArea
                  value={data.choice3}
                  placeholder={'Choice 3'}
                  rows={'2'}
                  onChange={(e) => handleChoice(e, key, 'choice3')}
                  error={hasEmpty && !data.choice3}
                  helper={hasEmpty && !data.choice3 ? 'This field is required.' : null} />
            </div>
            <div className='flex gap-x-5 items-center'>
              <RadioButton
                  value={4}
                  checked={data.answer === 4 ? true : null}
                  onChange={(e) => handleAnswer(e, key)}
                  name={key} />
              <TextArea
                  value={data.choice4}
                  placeholder={'Choice 4'}
                  rows={'2'}
                  onChange={(e) => handleChoice(e, key, 'choice4')}
                  error={hasEmpty && !data.choice4}
                  helper={hasEmpty && !data.choice4 ? 'This field is required.' : null} />
            </div>
        </>
  )
}

export default MultipleChoice