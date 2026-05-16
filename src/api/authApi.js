import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../utils/Axiosinstance';

export const useCreateEventAttendee = () => {
  return useMutation({
    mutationFn: (body) => {
      return axiosInstance.post('/api/users/register', body);
    },
  });
};
