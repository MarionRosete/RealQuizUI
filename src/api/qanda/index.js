import apiService from '../config';

export const CreateQandAAPI = (payload) => {
  try {
    const req = apiService.post('/create-qanda', payload, {
      accept: 'application/json',
      body: JSON.stringify(payload),

    });
    return req;
  } catch (error) {
    throw error;
  }
};
