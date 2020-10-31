import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
  usersdata=[];
  constructor(private userdata:UserdataService) { }

  ngOnInit(): void {
    this.usersdata=this.userdata.receivedata();
  }
  doDelete(index){
    if(index){
      this.usersdata.splice(index,1);
      localStorage.setItem('users',JSON.stringify(this.usersdata));
    }
  }
}
