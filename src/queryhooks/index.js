import {useQuery} from '@tanstack/react-query';
import {getAllQuizAPI} from '../api/quiz';
import {checkEmailTokenAPI} from '../api/auth';
export const getQandA=()=>{
  return useQuery(
      ['get-all-quiz'], () => getAllQuizAPI(),
  );
};
export const checkEmailToken = () =>{
  return useQuery(
      ['check-email-reset-pass'], () => checkEmailTokenAPI(),
  );
};
