import { Injectable } from '@angular/core';
import {User} from "../../models/user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject;
  private _user: User;

  constructor() {

    this.userSubject = new Subject<User>();

    this._user = new User(
      'Thomas',
      'CHEVALIER',
      'toto@gmail.com',
      'azerty'
    );

  }

  emitUserEcho(){
    this.userSubject.next(this._user);
  }
  get user():User {
    return this._user;
  }

  set user(value : User) {
    this._user = value;
  }

  /**
   *
   */
  getCurrentUser() {
    return this._user;
  }

  /**
   *
   * @param user
   */
  updateUser(user: User) {
    this._user = user;
    this.emitUserSubject();
  }

  /**
   *
   */
  emitUserSubject() {
    this.userSubject.next(this._user);
  }

}
