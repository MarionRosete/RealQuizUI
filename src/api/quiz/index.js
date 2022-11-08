import apiService from '../config';
export const getAllQuizAPI = async ()=>{
  try {
    const request = await apiService.get('/get-all-quiz', {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',

    });
    return request;
  } catch (error) {
    return error;
  }
};
