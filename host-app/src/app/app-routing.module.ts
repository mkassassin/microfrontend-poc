import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadChildren: () =>
      import('microAppOne/AccountModule').then((m) => m.AccountModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('microAppTwo/MarketModule').then((m) => m.MarketModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
