import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { NgModule } from '@angular/core';
import { FinalDatatableComponent } from './views/final-datatable/final-datatable.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { LoginComponent } from './components/login/login.component';
import { VideojuegoFormComponent } from './components/videojuego-form/videojuego-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tabla1',
    component: Tabla1Component,
  },
  {
    path: 'final-datatable',
    component: FinalDatatableComponent,
  },
  {
    path: 'voucher',
    component: VoucherComponent,
  },
  {
    path: 'Formulario-Compra',
    component: VideojuegoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
