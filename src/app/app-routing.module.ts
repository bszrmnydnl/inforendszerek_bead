import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HallgatoComponent} from './hallgato/hallgato.component';
import {KurzusComponent} from './kurzus/kurzus.component';
import {OktatoComponent} from './oktato/oktato.component';
import {TantargyComponent} from './tantargy/tantargy.component';

const routes: Routes = [
  {
    path: 'hallgato',
    component: HallgatoComponent
  },
  {
    path: 'kurzus',
    component: KurzusComponent
  },
  {
    path: 'oktato',
    component: OktatoComponent
  },
  {
    path: 'tantargy',
    component: TantargyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
