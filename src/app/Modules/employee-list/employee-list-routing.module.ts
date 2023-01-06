import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { employeelist } from './employee-list.component';


const routes: Routes = [
  {
    path: '',
    component: employeelist
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class employeelistRoutingModule { }
