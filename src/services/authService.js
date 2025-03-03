import API from './api';

export const login = async (email, password) => {
    try {
        const response = await API.post('/auth/login', { email, password });
        const { token, user } = response.data;


        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const register = async (email, password) => {
    try {
        const response = await API.post('/auth/register', { email, password });
        localStorage.setItem('token', response.data.token); 
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }       
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };