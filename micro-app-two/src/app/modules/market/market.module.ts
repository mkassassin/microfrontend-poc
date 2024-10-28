import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { WalletComponent } from '../../components/wallet/wallet.component';

@NgModule({
  declarations: [
	DashboardComponent,
	WalletComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
