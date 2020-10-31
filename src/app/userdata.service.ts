import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  addUser(user){
    var users=[];
    if(localStorage.getItem('users')){
       users=JSON.parse(localStorage.getItem('users'));
       users=[user,...users];
    }else{
      users=[user];
    }
    localStorage.setItem('users',JSON.stringify(users))
  }
  receivedata(){
    return  JSON.parse(localStorage.getItem( 'users' ));
  }

  
}
