import React from 'react'
import quotes from '../../assets/quotes.json'

const Root = () => {
  return (
    <div >
      <div className='text-4xl'>
        An Online quiz platform with Transparency
      </div>
      <div className='mt-3'>
        An A+ score is an indicator that someone had understood
         very well the subject matter,
         or more likely cheated a way.
        <br/>
        We simply believe in fair and transparent quiz. That's All!
      </div >
      <div className='mt-8'>
        Be one of the quiz maker or be the quiz taker. you decide. 
      </div>
      <div className='p-2'>
        <button  className='p-2 '>
          Join us now
        </button>
      </div>
    </div>
  )
}

export default Root