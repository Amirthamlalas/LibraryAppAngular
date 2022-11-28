import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  mail=""
  phone=""
  username=""
  pass=""
  confirmpass=""

  register=()=>{
    let data : any ={
      "name":this.name,
      "aadhar":this.aadhar,
      "address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "mail":this.mail,
      "phone":this.phone,
      "username":this.username,
      "pass":this.pass,
      "confirmpass":this.confirmpass
      
    }
    console.log(data)
  }

}
