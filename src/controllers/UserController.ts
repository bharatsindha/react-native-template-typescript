import {strings} from '@/localization';
import {routes} from '@/controllers/routes';

export class UserController {
  private networkService;

  constructor(networkService: any) {
    this.networkService = networkService;
  }

  login({username, password, demoMode}: any) {
    if (demoMode) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username && password) {
            resolve({data: {user: {username}}});
          } else {
            reject({data: {error: strings.login.invalidCredentials}});
          }
        }, 250);
      });
    }

    return this.networkService.request({
      method: 'POST',
      url: routes.authentication.login,
      data: {username, password},
    });
  }

  logout({demoMode}: any = {}) {
    if (demoMode) {
      return new Promise(resolve => {
        setTimeout(resolve, 250);
      });
    }

    return this.networkService.request({
      method: 'DELETE',
      url: routes.authentication.logout,
    });
  }
}
