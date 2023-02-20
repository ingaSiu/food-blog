import { useMutation } from 'react-query';
import { adminLogin } from '../api/login';

export const useLogin = () => {
  return useMutation({
    mutationFn: adminLogin,
    onSuccess: () => {},
  });
};
