import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {

    // Detailed version
    // const success = (user: User) => {
    //   this.user = user;
    // };
    //
    // this.userSubscription = this.userService.userSubject.subscribe(success);

    // Simplified version
    this.userSubscription = this.userService.userSubject.subscribe(
      (user: User) => {
        this.user = user;
      }
    );

    // Call manually the emitter
    this.userService.emitUserSubject();
  }

  /**
   *
   */
  onClickSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
