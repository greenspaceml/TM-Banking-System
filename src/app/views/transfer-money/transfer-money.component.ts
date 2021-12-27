import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Transaction } from '../../models/transaction';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
})
export class TransferMoneyComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storageService: StorageService
  ) {}

  formGroup: FormGroup;
  loginFailed = false;
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      description: [, [Validators.required]],
      withdrawals: [, [Validators.required]],
      receiverAccountEmail: [, [Validators.required]],
    });
  }

  onSubmit(): void {
    const form = this.formGroup.getRawValue();
    const payload = this.formingPayload(form);
    this.storageService.updateTransactionsList(payload);
  }

  formingPayload(payload: any): Transaction {
    const transactionList = this.storageService.getTransactionsList();
    const lastestBankAccount =
      transactionList[transactionList.length - 1].balance;
    const { description, withdrawals, receiverAccountEmail } = payload;
    return {
      date: moment(new Date()).format('MM/DD/YYYY'),
      description,
      deposits: null,
      withdrawals,
      balance: lastestBankAccount - withdrawals,
    };
  }
}
