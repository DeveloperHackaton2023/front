import { Component } from '@angular/core';


class Info {
  telephone!: string;
  fullname!: string;
  position!: string;

  constructor(telephone: string, fullname: string, position: string) {
    this.telephone = telephone;
    this.fullname = fullname;
    this.position = position;
  }

}

@Component({
  selector: 'app-main-info-table',
  templateUrl: './main-info-table.component.html',
  styleUrls: ['./main-info-table.component.css']
})
export class MainInfoTableComponent {
  protected infos: Info[] = [
    new Info(
      '+8 800-555-35-35',
      'Вячеслав Албертович Дубынин',
      'Администратор сети'
    ),

    new Info(
      '+8 800-555-35-35',
      'Олег Александрович Комолов',
      'Ответственный по заявкам'
    ),
  ]

  protected displayedColumns: string[] = 
  ['telephone', 'fullname', 'position'];

  constructor() {
    
  }
  

}
