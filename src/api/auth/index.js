import Axios from 'axios';
import apiService from '../config';
const api = Axios.create();
const baseUrl = 'http://127.0.0.1:8000/api';
api.defaults.baseURL = baseUrl;


export const loginAPI = async (payload)=>{
  try {
    const request = await api.post('/login', payload, {
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

export const forgotPasswordAPI = async (payload) =>{
  try {
    const request = await apiService.post('/forgot_password', payload, {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'body': JSON.stringify(payload),
    });
    return request;
  } catch (error) {
    return error;
  }
};

export const getAuthUser = async () => {
  try {
    const request = await apiService.get('/get-auth-user');
    return request.data;
  } catch (error) {
    return error;
  }
};

export const resendEmailVerification = async () =>{
  try {
    const request = await apiService.get('/email/verify/resend');
    return request;
  } catch (error) {
    return error;
  };
};

