import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // public name = ""
  public user = {
    email: "",
    password: ""
  }
  public handleClick() {
    console.log(this.user);
  }
}
