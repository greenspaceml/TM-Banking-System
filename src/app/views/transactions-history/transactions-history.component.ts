import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
})
export class TransactionsHistoryComponent implements OnInit {
  transactionHistory: Transaction[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.transactionHistory = this.storageService.getTransactionsList();
  }
}
