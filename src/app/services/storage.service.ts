import { Injectable } from '@angular/core';
import { accountDetails, listAccount } from '../mockdatas/mock';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getAccountDetails(): Account {
    return JSON.parse(localStorage.getItem('accountDetails'));
  }

  getTransactionsList(): Transaction[] {
    return JSON.parse(localStorage.getItem('transactionData'));
  }

  updateAccountDetails(accountInfoDetails: Account): void {
    localStorage.setItem('accountDetails', JSON.stringify(accountInfoDetails));
  }

  updateTransactionsList(accountInfoDetails: Transaction): void {
    const currentTransactionList = this.getTransactionsList();
    currentTransactionList.push(accountInfoDetails);
    localStorage.setItem(
      'transactionData',
      JSON.stringify(currentTransactionList)
    );
  }

  getListAccounts(): Account[] {
    return JSON.parse(localStorage.getItem('listAccount'));
  }

  initData(): void {
    if (localStorage.getItem('listAccount')) {
      return;
    } else {
      localStorage.setItem('listAccount', JSON.stringify(listAccount));
      localStorage.setItem('accountDetails', JSON.stringify(accountDetails));
    }
  }
}
