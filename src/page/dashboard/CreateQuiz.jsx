import React from 'react';
import Label from '../../component/elements/Label';
import Input from '../../component/elements/Input';
import Button from '../../component/elements/Button';
import {useState} from 'react';
import TextArea from '../../component/elements/TextArea';
import {useContext} from 'react';
import {TeacherStateContext} from '../../globalstate/TeacherContext';


const initDataState = {
  name: null,
  description: null,
};

const CreateQuiz = () => {
  const {
    handleCreateQuiz,
    cQuiz}=useContext(TeacherStateContext);
  const [send, setSend] = useState(initDataState);

  return (
    <div className="mt-10">
      {/* {error !==null&&
                    <div className='pb-4 text-red-700 text-sm'>
                      {error}
                    </div>
      } */}
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <Label content={'Room'}/>
          </div>
          <div className="md:w-2/3">
            <Input
              type={'text'}
              placeholder={'Name'}
              onChange={(e)=>
                setSend(
                    {...send,
                      name: e.target.value},
                )
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <Label content={'Description'}/>
          </div>
          <div className="md:w-2/3">
            <TextArea
              placeholder={'Description'}
              rows={'4'}
              onChange={(e)=>setSend({...send,
                description: e.target.value})}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button
            onClick={handleCreateQuiz}
            disabled={
              send.name===null||
              send.description===null||
              send.name.length>50||
              send.description.length>50||
              cQuiz
            }
            content={'Create'}
            loading={Creating}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
