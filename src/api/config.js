import Axios from 'axios';

const baseUrl = 'http://localhost:8000';
const apiService = Axios.create();

const withToken = (config) => {
  const token = localStorage.getItem('token');

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
    },
  };
};
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
apiService.interceptors.request.use(withToken);
apiService.defaults.baseURL = baseUrl;

export default apiService;
