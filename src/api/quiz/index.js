import apiService from '../config';
export const getTeacherQuizAPI = async ()=>{
  try {
    const request = await apiService.get('/get-all-quiz', {
      'Accept': 'application/json',
    });
    return request.data.quiz;
  } catch (error) {
    throw error;
  }
};

export const createQuizAPI = async (payload) => {
  try {
    const request = await apiService.post('/create-quiz', payload, {
      'Accept': 'application/json',
    });
    return request;
  } catch (error) {
    throw error;
  }
};

export const deleteQuizAPI = async (id) => {
  try {
    const request = await apiService.get(`/delete-quiz/${id}`);
    return request;
  } catch (error) {
    throw error;
  };
};

export const editQuizAPI = async (payload) => {
  try {
    const request = await apiService.post(`/update-quiz`, payload, {
      'Accept': 'application/json',
    });
    return request;
  } catch (error) {
    throw error;
  };
};

