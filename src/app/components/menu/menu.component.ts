import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 constructor(public loginService: LoginService) {
 }
}
