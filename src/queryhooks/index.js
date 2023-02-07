import {useQuery} from '@tanstack/react-query';
import {checkEmailTokenAPI} from '../api/auth';

export const checkEmailToken = () =>{
  return useQuery(
      ['check-email-reset-pass'], () => checkEmailTokenAPI(),
  );
};
