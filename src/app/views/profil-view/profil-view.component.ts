import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit, OnDestroy {

  userForm: FormGroup;

  currentUser: User;
  userSubscription: Subscription;

  msg: string;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {

    // Simplified version
    this.userSubscription = this.userService.userSubject.subscribe(
      (user: User) => {
        this.currentUser = user;
      }
    );

    // Call manually the emitter
    this.userService.emitUserSubject();

    this._initForm();

  }

  /**
   *
   * @private
   */
  _initForm() {
    this.userForm = this.formBuilder.group({
      firstname: [this.currentUser.firstname, Validators.required],
      lastname: [this.currentUser.lastname, Validators.required],
      email: [this.currentUser.email, [Validators.email, Validators.required]],
      password: [this.currentUser.password, Validators.required],
    })
  }

  /**
   *
   */
  onSubmitUpdateUser() {
    const formValues = this.userForm.value;

    const updateUser = new User(
      formValues.firstname,
      formValues.lastname,
      formValues.email,
      formValues.password
    );

    this.userService.updateUser(updateUser);

    this.msg = "Profil mis à jour avec succès !";

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();

  }

}
