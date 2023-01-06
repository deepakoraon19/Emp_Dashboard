import {Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmpListService } from 'src/app/Services/emp-list.service';
import {ConfirmationService} from 'primeng/api';
import * as html2pdf from 'html2pdf.js'
import data from '../../../assets/data'

@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class employeelist implements OnInit{
  constructor(private empService:EmpListService, private confirmationService: ConfirmationService){
    this.departments=["Accounting","Business Development","Engineering","Human Resources","Legal","Marketing","Product Management","Research and Development","Sales","Services","Support","Training"];
  }
  departments:string[];
  records: Employee [];
  employeeDialog : boolean;
  employee: Employee;
  submitted: boolean;
  update:boolean=false;
  confirmationDialog:boolean = false;
  selectedDepartment:string;
  errorDialog:boolean;
  reEntryDialog:boolean;

  ngOnInit(){
    this.setAll();
    this.getAll();
  }

  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    var element = this.pdfTable.nativeElement;
    console.log(element)
    var opt = {
      margin:       0.5,
      filename:     'myfile19.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 4 },
      jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' },
      pagebreak:    {mode: 'avoid-all'}
    };
    html2pdf().set(opt).from(element).save();
  }

  confirm(operation:string, args?:any) {
    if(!this.update&&operation==='save'){
      this.saveEmployee()
    }else{
      this.confirmationService.confirm({
        message: `Are you sure that you want to ${operation}?`,
        accept: () => {
          if(operation==="save"){
            this.saveEmployee()
          }else if(operation==="delete"){
            this.deleteEmployee(args)
          }
        }
      });
    }
  }

  getAll(){
    this.empService.getEmpList().subscribe(event => {
      this.records=<Employee[]>event
    });
  }

  setAll(){
    data.forEach(emp => {
      this.empService.addEmployee(emp).subscribe()
    });
  }

  openNew(){
    this.employee={firstName:"",secondName:"",department:"",phone:"",role:""};
    this.employeeDialog=true;
    this.submitted=true;
  }

  saveEmployee(){
    if(this.employee.department.trim()===''||
    this.employee.firstName.trim()===''||
    this.employee.phone.trim()===''||
    this.employee.secondName.trim()===''){
      this.errorDialog=true;
    }else{
      if(this.update){
        this.empService.updateEmployee(this.employee).subscribe(data => {
          if(<boolean>data) {
            this.getAll()
            this.employeeDialog=false;
          }
          else console.log("Not Found")
        });
        this.update=false;
      }
      else{
        this.employeeDialog=false;
        this.empService.addEmployee(this.employee).subscribe( data => {
          if(<boolean>data){
            this.getAll()
          }else this.reEntryDialog=true;
        });
      }
    }
  }

  editEmployee(employee:Employee){
    this.employeeDialog=true;
    this.update=true;
    this.employee = {...employee};
  }

  deleteEmployee(employee:Employee){
    this.empService.deleteEmployee(employee.id??0).subscribe(data=>
      this.getAll()
      );
    }

  }
