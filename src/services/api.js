import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API functions
export const tourAPI = {
  getAllTours: (params) => api.get('/tours', { params }),
  getTour: (id) => api.get(`/tours/${id}`),
  getTourBySlug: (slug) => api.get(`/tours/slug/${slug}`),
  getFeaturedTours: () => api.get('/tours/featured/list'),
};

export const dayTourAPI = {
  getAllDayTours: (params) => api.get('/day-tours', { params }),
  getDayTour: (id) => api.get(`/day-tours/${id}`),
  getDayTourBySlug: (slug) => api.get(`/day-tours/slug/${slug}`),
};

export const bookingAPI = {
  createBooking: (data) => api.post('/bookings', data),
};

export const testimonialAPI = {
  getTestimonials: (params) => api.get('/testimonials', { params }),
};

export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
};

export const adminAPI = {
  login: (data) => api.post('/admin/login', data),
  register: (data) => api.post('/admin/register', data),
  getProfile: () => api.get('/admin/profile'),
  getDashboardStats: () => api.get('/admin/dashboard/stats'),
};

export default api;