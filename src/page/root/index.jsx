import React,{useState} from 'react'
import { Link } from '@tanstack/react-location'
import Header from '../../component/header'
import Login from '../auth/Login';


const Root = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className='w-full' >
      <Header/>
      <div className='
        flex
        justify-center
        items-center
        text-center
        h-screen
        w-screen
        
        '
      >
        <div className='content'>
       
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
            <button  className='p-2' 
              onClick={()=>setIsOpen(true)}
            >
              
              Join us now
            
            </button>
          </div>
        </div>
      </div>
      <Login isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default Root