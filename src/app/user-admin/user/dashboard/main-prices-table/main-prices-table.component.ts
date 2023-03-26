import { Component } from '@angular/core';

class Price {
  
  position!: string;
  price: number;


  constructor(position: string, price: number) {
    this.position = position;
    this.price = price
  }
}

@Component({
  selector: 'app-main-prices-table',
  templateUrl: './main-prices-table.component.html',
  styleUrls: ['./main-prices-table.component.css']
})
export class MainPricesTableComponent {
  protected infos: Price[] = [
    new Price(
      'Вывоз мусора',
      2000
    ),

    new Price(
      'Обслуживание лифта',
      500
    ),

    new Price(
      'Поддержка коммунизма',
      10000
    ),

  ]

  protected displayedColumns: string[] = 
  ['position', 'price'];
}
