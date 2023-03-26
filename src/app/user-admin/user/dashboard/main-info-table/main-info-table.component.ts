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
      'Классный тест',
      'Тестировщик'
    ),

    new Info(
      '+8 800-555-35-35',
      'Геннадий',
      'Разнорабочий (не смог поднять PostgreSQL)'
    ),
  ]

  protected displayedColumns: string[] = 
  ['telephone', 'fullname', 'position'];

  constructor() {
    
  }
  

}
