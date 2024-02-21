import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  register: boolean = false
  constructor(private loginService: LoginService) {
  }

  changeForm() {
    this.register = !this.register
  }
}
