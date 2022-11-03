import Axios from 'axios';


const token = localStorage.getItem('token');

const apiService = Axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 3000,
  headers: {'Authorization': 'Bearer '+token},
});


apiService.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (401 === error.response.status) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (window.location.pathname !== '/') {
          window.location.href = '/';
        }
      } else {
        return Promise.reject(error);
      }
    },
);


export default apiService;
