import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../../models/account';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-form-client-account',
  templateUrl: './form-client-account.component.html',
  styleUrls: ['./form-client-account.component.scss'],
})
export class FormClientAccountComponent implements OnInit {
  formGroup: FormGroup;
  @Input() account: Account = null;
  @Input() id: string = null;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  isFailed = false;
  ngOnInit(): void {
    this.initForm();
    this.onloadData();
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
    if (this.account) {
      if (accountInfo.password === accountInfo.passwordConfirm) {
        const result = this.authService.updateAnAccount(this.id, accountInfo);
        if (result) {
          this.router.navigate(['./client/list-client-account']);
        }
      } else {
        this.isFailed = true;
      }
    } else {
      if (accountInfo.password === accountInfo.passwordConfirm) {
        const result = this.authService.createNewAccount(accountInfo);
        if (result) {
          this.router.navigate(['./client/list-client-account']);
        }
      } else {
        this.isFailed = true;
      }
    }
  }

  onloadData(): void {
    if (this.account) {
      this.formGroup.patchValue({
        username: this.account.username,
        email: this.account.email,
      });
    }
  }
}
