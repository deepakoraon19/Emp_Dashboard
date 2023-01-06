import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () =>
      import('./Modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path:'employees',
    loadChildren: () =>
      import('./Modules/employee-list/employee-list.module').then(
        (m) => m.EmployeeListModule
      ),
    // component:employeelist
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
