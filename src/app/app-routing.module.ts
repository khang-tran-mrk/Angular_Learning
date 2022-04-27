import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Baitap1Component } from './baitap1/baitap1.component';
import { FormControlComponent } from './form-control/form-control.component';

const routes: Routes = [
  {
    path: 'baitap1',
    component: Baitap1Component,
  },
  {
    path: 'baitap2',
    component: FormControlComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
