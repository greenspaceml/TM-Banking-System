import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../../models/account';
import { ClientAccountService } from '../../../services/client-account.service';

@Component({
  selector: 'app-update-client-account',
  templateUrl: './update-client-account.component.html',
  styleUrls: ['./update-client-account.component.scss'],
})
export class UpdateClientAccountComponent implements OnInit {
  id: string;
  account: Account;
  constructor(
    private route: ActivatedRoute,
    private clientAccountService: ClientAccountService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadData(id);
  }

  loadData(id: string): void {
    const listAccount = this.clientAccountService.getListAccounts();
    this.account = listAccount.find((v) => v.id === id);
  }
}
