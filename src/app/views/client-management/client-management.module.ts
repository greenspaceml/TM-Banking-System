import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientManagementRoutingModule } from './client-management-routing.module';
import { CreateClientAccountComponent } from './create-client-account/create-client-account.component';
import { FormClientAccountComponent } from './form-client-account/form-client-account.component';
import { ListClientAccountsComponent } from './list-client-accounts/list-client-accounts.component';
import { UpdateClientAccountComponent } from './update-client-account/update-client-account.component';

@NgModule({
  declarations: [
    CreateClientAccountComponent,
    UpdateClientAccountComponent,
    FormClientAccountComponent,
    ListClientAccountsComponent,
  ],
  imports: [CommonModule, ClientManagementRoutingModule, ReactiveFormsModule],
})
export class ClientManagementModule {}
