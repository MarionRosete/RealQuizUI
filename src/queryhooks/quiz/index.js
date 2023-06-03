
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {createQuizAPI,
  getTeacherQuizAPI,
  deleteQuizAPI,
  editQuizAPI} from '../../api/quiz';

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
export const useDeleteTeacherQuiz = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteQuizAPI, {
    onSuccess: ()=>{
      queryClient.invalidateQueries('get-teacher-quiz');
    },
  },
  );
};
export const useEditTeacherQuiz = () => {
  const queryClient = useQueryClient();
  return useMutation(editQuizAPI, {
    onSuccess: ()=>{
      queryClient.invalidateQueries('get-teacher-quiz');
    },
  },
  );
};


