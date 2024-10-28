import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { WalletComponent } from '../../components/wallet/wallet.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	 },
	 {
		path: 'dashboard',
		component: DashboardComponent,
	 },
	 {
		path: 'wallet',
		component: WalletComponent,
	 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
