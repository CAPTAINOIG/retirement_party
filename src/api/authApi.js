import { useMutation } from '@tanstack/react-query';
import http from '../lib/http';

export const useCreateEventAttendee = () => {
  return useMutation({
    mutationFn: (body) => {
      return http.post('/misc/event-attendees', body);
    },
  });
};