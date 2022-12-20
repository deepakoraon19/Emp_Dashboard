import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmpListService } from 'src/app/Services/emp-list.service';


@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class employeelist implements OnInit{
constructor(private empService:EmpListService){}

records: Employee [];

ngOnInit(): void {
this.empService.getEmpList().subscribe(event => {
  this.records=<Employee[]>event
  console.log(this.records);
});
}

openNew(){
  console.log("click");
}

}
