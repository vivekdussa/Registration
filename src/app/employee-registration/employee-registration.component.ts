import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { User } from '../user';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private fb:FormBuilder ,private userdata:UserdataService) { }
   user:any={};
  ngOnInit(): void {
    this.createRegistrationForm();
    
  }

  createRegistrationForm(){
    
  this.registrationForm= this.fb.group({
    name:['',Validators.required],
    position:['',Validators.required],
    about:['',Validators.required],
    date:['',Validators.required]
  })
}
  onSubmit(){
    // console.log(this.registrationForm.value);
   this.user=Object.assign(this.user,this.registrationForm.value);
    this.userdata.addUser(this.user);
    this.registrationForm.reset();
  }


}


