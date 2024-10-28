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
      import('microAppOne/appModule').then((m) => m.AppModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('microAppTwo/appModule').then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
