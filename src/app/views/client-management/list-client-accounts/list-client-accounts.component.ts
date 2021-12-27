import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { ClientAccountService } from '../../../services/client-account.service';

@Component({
  selector: 'app-list-client-accounts',
  templateUrl: './list-client-accounts.component.html',
  styleUrls: ['./list-client-accounts.component.scss'],
})
export class ListClientAccountsComponent implements OnInit {
  listAccount: Account[];
  constructor(private clientAccountService: ClientAccountService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listAccount = this.clientAccountService.getListAccounts();
  }
}
