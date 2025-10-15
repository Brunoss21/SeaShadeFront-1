import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // A URL base da sua API
});

// Este "interceptor" é uma função que é executada ANTES de cada requisição
apiClient.interceptors.request.use(
  (config) => {
    // Pega o objeto 'user' do localStorage
    const userString = localStorage.getItem('user');
    
    if (userString) {
      const user = JSON.parse(userString);
      
      // ATENÇÃO: Use o nome do campo exatamente como ele vem do seu backend.
      // No nosso último teste, era 'acessToken' (com um 'c' só).
      const token = user.accessToken; 

      // Se o token existir, adiciona ao cabeçalho da requisição
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => {
    // Em caso de erro na configuração da requisição
    return Promise.reject(error);
  }
);

export default apiClient;