import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  username: any;
  password: any;
  userDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get f () {
    return this.loginForm.controls;
  }

  login() {
    this.isLoading = true;

    const credentials = this.loginForm.value;
    const request = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.authService.login(request)
      .subscribe(result => {
        this.userDetails = result;
        if (this.userDetails.error){
           window.alert('invalid')
           this.isLoading = false;
           this.router.navigate(['/login'])
        }else{
          localStorage.setItem('appuser', JSON.stringify(this.userDetails));
          this.router.navigate(['/home/home'])
        }
      }

      );
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
