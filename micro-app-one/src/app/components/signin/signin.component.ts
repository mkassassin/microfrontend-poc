import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostDataSharingService } from '../../services/host-data-sharing.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
	signInForm: FormGroup;

	constructor(private router: Router, private hostSharing: HostDataSharingService) {
		this.signInForm = new FormGroup({
		  email: new FormControl('', [Validators.required, Validators.email]),
		  password: new FormControl('', [Validators.required, Validators.minLength(6)])
		});
	 }
  
	 onSubmit() {
		if (this.signInForm.valid) {
		  window.location.href = 'http://localhost:4200/account/profile';
		  this.hostSharing.setAccountData("Signed in successfully")
		}
	 }

}
