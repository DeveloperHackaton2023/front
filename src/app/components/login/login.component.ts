import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms'
import { UserService as UserService } from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iin = '';
  password = '';
  lord:string = 'notLord';

  ngOnInit(): void {

  }

  constructor(
    private userService: UserService,
  ) {}

  onSubmit(): void {
    if (this.password && this.iin) {
      this.userService.tryLogin(this.iin, this.password)
      return;
    }
    alert("Неверный ИИН или номер телефона")
  }
  
}
