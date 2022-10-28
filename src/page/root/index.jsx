import React from 'react'
import Header from '../../component/header'


const Root = () => {
  return (
    <div className='w-full' >
      <Header/>
      <div className='
        absolute 
        left-1/2 
        top-1/2 
        transform -translate-x-1/2 -translate-y-1/2
        text-center'
      >
       
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
     
    </div>
  )
}

export default Root