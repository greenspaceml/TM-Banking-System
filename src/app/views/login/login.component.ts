import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { accountDetails, transactions } from '../../mockdatas/mock';
import { Account } from '../../models/account';
import { Transaction } from '../../models/transaction';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}
  readonly transactions: Transaction[] = transactions;
  readonly accountDetails: Account = accountDetails;
  formGroup: FormGroup;
  loginFailed = false;
  ngOnInit(): void {
    this.initForm();
  }

  onLogin(): void {
    const loginInfo = this.formGroup.getRawValue();
    const success = this.authService.login(loginInfo);
    if (success) {
      localStorage.setItem(
        'transactionData',
        JSON.stringify(this.transactions)
      );
      this.router.navigate(['./account-details']);
    } else {
      this.loginFailed = true;
    }
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      username: [, [Validators.required]],
      password: [, [Validators.required]],
    });
  }
}
