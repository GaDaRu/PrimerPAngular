import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";
import {routes} from "../../app.routes";
import {Router} from "@angular/router";

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
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  changeForm() {
    this.register = !this.register
  }

  async loginGoogle() {
    const user = await this.loginService.loginGoogle()
    await this.router.navigate(['/'])
    console.log('usuario', user?.user?.multiFactor.getSession())
  }
}
