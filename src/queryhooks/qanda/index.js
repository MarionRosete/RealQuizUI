import {useMutation} from '@tanstack/react-query';
import {CreateQandAAPI} from '../../api/qanda';

export const useAddQandA = () => {
  return (
    useMutation(CreateQandAAPI, {
      onSuccess: (res)=>{
        console.log('Successfully Created');
        return res;
      },
    })
  );
};

