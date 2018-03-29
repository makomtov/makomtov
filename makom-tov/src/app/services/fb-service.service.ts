import { Injectable } from '@angular/core';
import { AuthResponse, FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Injectable()
export class FbServiceService {

  constructor(private fb: FacebookService) {

    const authResponse: AuthResponse = this.fb.getAuthResponse();

    console.log('Initializing Facebook');

    fb.init({
      appId: '364752720667873',
      version: 'v2.12'
    });
  }
    /**
     * Login with minimal permissions. This allows you to see their public profile only.
     */
    login() {
      this.fb.login()
        .then((res: LoginResponse) => {
          console.log('Logged in', res);
          this.getProfile();
        })
        .catch(this.handleError);
    }

    /**
     * Login with additional permissions/options
     */
    loginWithOptions() {

      const loginOptions: LoginOptions = {
        enable_profile_selector: true,
        return_scopes: true,
        scope: 'public_profile,email'
      };

      this.fb.login(loginOptions)
        .then((res: LoginResponse) => {
          console.log('Logged in', res);
          this.getProfile();
          // this.share();
        })
        .catch(this.handleError);

    }

    getLoginStatus() {
      this.fb.getLoginStatus()
        .then(console.log.bind(console))
        .catch(console.error.bind(console));
    }


    /**
     * Get the user's profile
     */
    getProfile() {
      this.fb.api('/me?fields=id,name,birthday,address,email,first_name,last_name')
        .then((res: any) => {
          console.log('Got the users profile', res);
        })
        .catch(this.handleError);
    }

    /**
     * Get the users friends
     */
    getFriends() {
      this.fb.api('/me?fields=id,name,birthday,address,email,gender,first_name,last_name')
        .then((res: any) => {
          console.log('Got the users friends', res);
        })
        .catch(this.handleError);
    }

    /**
     * Show the share dialog
     */
    share() {

      const options: UIParams = {
        method: 'share',
        href: 'https://www.facebook.com/yosef841'
      };

      this.fb.ui(options)
        .then((res: UIResponse) => {
          console.log('Got the users profile', res);
        })
        .catch(this.handleError);

    }

  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

}
