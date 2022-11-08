import {useQuery} from '@tanstack/react-query';
import {getAllQuizAPI} from '../api/quiz';
export const getQandA=()=>{
  return useQuery(
      ['get-all-quiz'], () => getAllQuizAPI(),
  );
};
