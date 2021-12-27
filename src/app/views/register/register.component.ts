import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  isFailed = false;
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      username: [, [Validators.required]],
      password: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      passwordConfirm: [, [Validators.required]],
    });
  }

  onCreateAccount(): void {
    const accountInfo = this.formGroup.getRawValue();
    if (accountInfo.password === accountInfo.passwordConfirm) {
      const result = this.authService.createNewAccount(accountInfo);
      if (result) {
        this.router.navigate(['./account-details']);
      }
    } else {
      this.isFailed = true;
    }
  }
}
