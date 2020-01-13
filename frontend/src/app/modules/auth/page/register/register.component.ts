import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '@app/service/api.service';
import { SigninService } from '@app/service/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // submitted = false;
  // userForm: FormGroup;

  // constructor(private router:Router,
  //   public fb: FormBuilder,
  //   private ngZone: NgZone,
  //   private apiService: ApiService) 
  //   {
  //     this.mainForm();
  //   }

  //   mainForm() {
  //     this.userForm = this.fb.group({
  //       firstname: ['', [Validators.required]],
  //       lastname: ['', [Validators.required]],
  //       username: ['', [Validators.required]],
  //       password: ['', [Validators.required]],
  //       email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //       mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  //     })
  //   }
  
  //   // Getter to access form control
  //   get myForm(){
  //     return this.userForm.controls;
  //   }
  
  //   onSubmit() {
  //     this.submitted = true;
  //     if (!this.userForm.valid) {
  //       return false;
  //     } else {
  //       this.apiService.createUser(this.userForm.value).subscribe(
  //         (res) => {
  //           console.log('User successfully created!')
  //           this.ngZone.run(() => this.router.navigateByUrl('/login'))
  //         }, (error) => {
  //           console.log(error);
  //         });
  //     }
  //   }

  userForm: FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: SigninService) {
      this.mainForm();
    }
  submitted = false;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
  mainForm() {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get myForm(){
    return this.userForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      this.apiService.createUser(this.userForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigate(['login']))
        }, (error) => {
          console.log(error);
        });
  }
  }
}
