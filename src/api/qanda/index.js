import apiService from '../config';

export const CreateQandAAPI = async (payload) => {
  try {
    const req = await apiService.post('/create-qanda', payload, {
      accept: 'application/json',
      body: JSON.stringify(payload),

    });
    return req;
  } catch (error) {
    throw error;
  }
};

export const getQandAAPI = async (payload) => {
  try {
    const req = await apiService.get(`/get-qanda/${payload}`);
    return req;
  } catch (error) {
    throw error;
  }
};
