import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartJSRoutingModule } from '../chartjs/chartjs-routing.module';
import { ChartJSComponent } from '../chartjs/chartjs.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ChartJSRoutingModule,
    ChartsModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [DashboardComponent, ChartJSComponent],
})
export class DashboardModule {}
