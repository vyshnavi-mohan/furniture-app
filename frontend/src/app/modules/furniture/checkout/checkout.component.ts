import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {

  paymentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.paymentForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          address: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zip: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          email: ['', [Validators.required, Validators.email]],
          cardname: ['', Validators.required],
          cardnumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10)]],
          expmonth: ['', Validators.required],
          expyear: ['', Validators.required],
          cvv: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3)]]
        //  password: ['', [Validators.required, Validators.minLength(6)]],
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  payment() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.paymentForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.paymentForm.value))
  }
}
