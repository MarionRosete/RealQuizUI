import React from 'react'
import TextArea from '../../../component/elements/TextArea'

const Indentification = ({key,data,handleQuestion,handleAnswer}) => {
  return (
    <div key={key} className='space-y-2 mr-2 ml-2 snap-center'>
    <div className='flex gap-x-5 items-center'>
      <TextArea
        value={data.question}
        placeholder={'Question'}
        rows={'5'}
        onChange={(e)=>handleQuestion(e, key)}
        // error={!data.question&&hasEmpty}
        // helper={hasEmpty&&!data.question?'This field is required.':null}
      />
    </div>
    <div className='flex gap-x-5 items-center'>
    
      <TextArea
        value={data.answer}
        placeholder={'Answer'}
        rows={'2'}
        onChange={(e)=>handleAnswer(e, key)}
       
      />
    </div>
  
  </div>
  )
}

export default Indentification