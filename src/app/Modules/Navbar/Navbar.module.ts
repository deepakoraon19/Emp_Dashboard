import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { NavComponent } from './Navbar.component';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[NavComponent]
})
export class Navbar { }
