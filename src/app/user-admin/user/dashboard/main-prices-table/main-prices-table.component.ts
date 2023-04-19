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
      'Налог на владение автомобилем',
      2000
    ),

    new Price(
      'Штраф за превышение скорости (+10)',
      2500
    ),

    new Price(
      'Штраф за парковку в неположенном месте',
      2000
    ),

  ]

  protected displayedColumns: string[] = 
  ['position', 'price'];
}
