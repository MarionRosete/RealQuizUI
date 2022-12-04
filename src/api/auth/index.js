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

export const logoutAPI = async ()=>{
  try {
    const request = await apiService.get('/logout', {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
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

export const changePassword= async (payload) => {
  try {
    const request = await apiService.post(`/change_forgotten_password`,
        payload, {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'body': JSON.stringify(payload),
        });
    return request;
  } catch (error) {
    return error;
  }
};

export const checkEmailTokenAPI = async ( )=>{
  const urlParams = new URLSearchParams(window.location.search);
  const token =urlParams.get('token');
  const email = urlParams.get('email');

  try {
    const request = await apiService.get(
        `/check-email-reset-password/${token}/${email}`,
        {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
    );
    return request;
  } catch (error) {
    return error;
  };
};

