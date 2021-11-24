import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from './Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./bootstrap.min.css', './register.component.css']
})
export class RegisterComponent implements OnInit {

  regObj : Register = new Register();
  regArray: Register[]=[];
  

  ngOnInit(): void {
  }
  constructor(private regService : RegisterService){}
 
  getAllRegistration() //this is called on click of the button
  {
    console.log('getAllRegister()--> invoking getAllRegisterService()...');
    this.regService.getAllRegistrationService().subscribe(
      (data: Register[])=> //srping data is pushed into this data variable
      {
        this.regArray = data; //assign data to allFriends so that html can fetch it in tr td tags
        console.log(this.regArray);
      }, 
      (err) => {
        console.log(err);
      }
    ); 
  }
  
  saveRegistration() {
    console.log('saveRegister()--> invoking saveRegisterService()...');
    this.regService.saveRegisterService(this.regObj).subscribe(
      (data: Register)=> //srping data is pushed into this data variable
      {
        this.regObj = data; //assign data to allFriends so that html can fetch it in tr td tags
        console.log(this.regObj);
        alert("user registered");//refresh the array

      }, 
      (err) => {
        console.log(err);
      }
    ); 
  }

}
