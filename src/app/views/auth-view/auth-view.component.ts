import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  authForm: FormGroup;

  errorMsg: string;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]], // Index 0: Default value && Index 1: Validator(s)
      'password': ['', Validators.required]
    });

  }

  /**
   *
   */
  onSubmitSignIn() {

    const email = this.authForm.value.email,
      pwd = this.authForm.value.password;

    this.authService.signIn(email, pwd)
      .then(data => {
        // Success, user is auth !
        this.router.navigate(['books']);
      })
      .catch(err => {
        // Failed, user isn't auth !
        this.errorMsg = err;
      })

  }

}
