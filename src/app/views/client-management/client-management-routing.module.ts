import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientAccountComponent } from './create-client-account/create-client-account.component';
import { ListClientAccountsComponent } from './list-client-accounts/list-client-accounts.component';
import { UpdateClientAccountComponent } from './update-client-account/update-client-account.component';

const routes: Routes = [
  {
    path: 'create-client-account',
    component: CreateClientAccountComponent,
  },
  {
    path: 'update-client-account/:id',
    component: UpdateClientAccountComponent,
  },
  {
    path: 'list-client-account',
    component: ListClientAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientManagementRoutingModule {}
