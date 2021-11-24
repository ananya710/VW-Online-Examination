import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register/Register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private myHttp: HttpClient) { }
  
  saveRegisterService(newReg: Register) {
    console.log('saveRegisterService() invoked...');
    // console.log(newReg.city,newReg.dob,newReg.email,newReg.qualification);
    
    return this.myHttp.post<Register>("http://localhost:8085/regJPA/addRegBody",newReg);
  }

  getAllRegistrationService() : Observable<Register[]> 
  {
    console.log('getAllRegistrationService() invoked...');
    return this.myHttp.get<Register[]>("http://localhost:8085/regJPA/getreg");
  }

}
