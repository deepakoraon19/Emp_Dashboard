import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmpListService } from 'src/app/Services/emp-list.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavComponent implements OnInit{
constructor(private empService:EmpListService){}

  records: Employee [];

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
              label: 'Home',
              routerLink: ['/home']
            },
            {
              label: 'Employees',
              routerLink: ['/employees']
            }
        ];
    }

}
