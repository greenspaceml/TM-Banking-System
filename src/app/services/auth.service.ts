import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { Account } from '../models/account';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService, private router: Router) {}

  login(accountInfo: Account): boolean {
    const accountList = this.storageService.getListAccounts();
    const found = accountList.find((v) => {
      return v.username === accountInfo.username;
    });
    if (found) {
      const success = found.password === accountInfo.password;
      if (success) {
        localStorage.setItem('accountDetails', JSON.stringify(found));
        localStorage.setItem('isLoggin', 'true');
        this.router.navigate(['./account-details']);
        return true;
      }
    }
    return false;
  }

  createNewAccount(accountDetails: Account): boolean {
    const currentAccounts = this.storageService.getListAccounts();
    const newAccount = accountDetails;
    newAccount.id = uuid.v4();
    currentAccounts.push(newAccount);
    localStorage.setItem('listAccount', JSON.stringify(currentAccounts));
    localStorage.setItem('accountDetails', JSON.stringify(newAccount));
    return true;
  }

  updateAnAccount(id: string, payload: Account): boolean {
    const currentAccounts = this.storageService.getListAccounts();
    currentAccounts.forEach((element: Account, i) => {
      if (id === element.id) {
        currentAccounts.splice(i, 1);
        const account = element;
        account.username = payload.username;
        account.password = payload.password;
        account.email = payload.email;
        currentAccounts.push(account);
        console.log(currentAccounts);

        return true;
      }
    });
    return false;
  }
}
