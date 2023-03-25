import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms'
import { RegistrService } from '../../services/registr.service'

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit{
  phone = '';
  iin = '';
  lord:string =  'notLord';

  ngOnInit(): void {

  }

  constructor(
    private registrService: RegistrService,
  ) {}

  onSubmit(): void {
    if (this.phone && this.iin) {
      console.log("Пользоваетль зареган");
      console.log(this.lord);
      this.lord = 'notLord';
      return;
    }
    alert("Неверный ИИН или номер телефона")
  }
  
}
