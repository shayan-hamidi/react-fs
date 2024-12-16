import { type AxiosInstance } from 'axios';

const loginService = (instance: AxiosInstance) => ({
  login: {
    getVersion: () => {
      return instance.get('/v1/version');
    },
    getCaptcha: () => {
      return instance.get<{ captchaBase64: string; captchaGuid: string }>(
        'v1/user/captcha_image'
      );
    },
    login: (data: {
      userName: 'string';
      password: 'string';
      captchaString: 'string';
      captchaGuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    }) => {
      return instance.post('v1/user/login', data);
    },
  },
});

export type LoginServiceActions = ReturnType<typeof loginService>;

export default loginService;
