import Axios from 'axios';


const token = localStorage.getItem('token');

const apiService = Axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {'Authorization': 'Bearer '+token},
});


apiService.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if ( 403===error?.response?.status ) {
        window.location.href= '/unverified-email';
      }
      if (401 === error?.response?.status) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (window.location.pathname !== '/') {
          window.location.href = '/';
        }
      } if (error.message==='Network Error') {
        window.location.href = 'error';
      } else {
        return Promise.reject(error);
      }
    },
);


export default apiService;
