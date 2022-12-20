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

  

}
