import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar'
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber'
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { employeelist } from './employee-list.component';
import { employeelistRoutingModule } from './employee-list-routing.module';


@NgModule({
  declarations: [employeelist],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    ToolbarModule,
    InputNumberModule,ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    employeelistRoutingModule
  ],
  exports:[]

})
export class EmployeeListModule { }
