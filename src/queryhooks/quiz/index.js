import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {createQuizAPI, getTeacherQuizAPI} from '../../api/quiz';

export const useGetTeacherQuiz = () => {
  return useQuery(['get-teacher-quiz'], ()=>getTeacherQuizAPI());
};

export const useCreateTeacherQuiz = () => {
  const queryClient = useQueryClient();
  return useMutation(createQuizAPI, {
    onSuccess: ()=>{
      queryClient.invalidateQueries('get-teacher-quiz');
    },
    onError: (_error, _timesheet, context)=>{
      console.error(context);
    },
  });
};
