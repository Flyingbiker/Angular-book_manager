import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private userService: UserService) {

  }

  /**
   *
   * @param email
   * @param pwd
   */
  signIn(email, pwd) {
    return new Promise(
      (res, rej) => {

        setTimeout(() => {

          const user = this.userService.getCurrentUser();

          if(user.email === email && user.password === pwd) {
            this.isAuth = true;
            res();
          }
          else {
            rej('Le couple email/mot de passe est incorrecte !');
          }

        }, 1000);

      }
    )
  }

  /**
   *
   */
  signOut() {
    this.isAuth = false;
  }

}
