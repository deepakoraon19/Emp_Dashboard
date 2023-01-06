import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  controller = 'https://localhost:7160/Employee'

  constructor(private http:HttpClient) {}

  getEmpList(){
    const targetUri = this.controller;
    return this.http.get(targetUri);
  }

  getEmp(id: number){
    const targetUri = this.controller+id.toString;
    return this.http.get(targetUri);
  }

  addEmployee(employee:Employee){
    const targetUri = this.controller;
    return this.http.post(targetUri, employee);
  }
  updateEmployee(employee:Employee){
    const targetUri = this.controller;
    return this.http.put(targetUri,employee);
  }

  deleteEmployee(id:number){
    const targetUri = `${this.controller}/${id}`;
    return this.http.delete(targetUri);
  }



}
