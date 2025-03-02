import API from './api';

export const login = async (email, password) => {
    try {
        const response = await API.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
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
}