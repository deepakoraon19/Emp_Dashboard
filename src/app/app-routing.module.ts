import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './Modules/Navbar/Navbar.component';
import { employeelist } from './Modules/employee-list/employee-list.component';


const routes: Routes = [
  {
    path:'',
    component: employeelist
  },
  {
    path:'view',
    component:employeelist
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
