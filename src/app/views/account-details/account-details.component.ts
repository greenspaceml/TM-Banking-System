import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../models/account';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  formGroup: FormGroup;
  accountDetails: Account;
  // constructor(private fb: FormBuilder, private toast: ToastrService) {}
  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.accountDetails = this.storageService.getAccountDetails();
    this.initForm();
    this.initData();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      role: [null, [Validators.required]],
    });
  }

  initData(): void {
    this.formGroup.patchValue({
      email: this.accountDetails.email,
      username: this.accountDetails.username,
      gender: this.accountDetails.gender,
      role: this.accountDetails.role,
      dateOfBirth: this.accountDetails.dateOfBirth,
    });
  }

  onSubmit(): void {
    const accountDetails: Account = this.formGroup.getRawValue();
    console.log(accountDetails);
    this.storageService.updateAccountDetails(accountDetails);
  }
}
