import { strings } from '@/localization';

export const resInterceptor = {
  onFulfill(response: any) {
    return response;
  },
  onReject(error: any) {
    if (error.response) {
      return Promise.reject(error.response);
    }

    if (error.request) {
      return Promise.reject({ error: strings.common.connectionError });
    }

    return Promise.reject(error);
  },
};
