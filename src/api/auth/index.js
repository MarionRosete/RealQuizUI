import apiService from '../config';
export const loginAPI = async (payload)=>{
  try {
    const request = await apiService.post('/login', payload, {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
      'body': JSON.stringify(payload),
    });
    return request;
  } catch (error) {
    return error;
  }
};

export const registerAPI = async (payload)=>{
  try {
    const request = await apiService.post('/register', payload, {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'body': JSON.stringify(payload),

    });
    return request;
  } catch (error) {
    return error;
  }
};
