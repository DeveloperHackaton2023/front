import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit{
  id!: number;

  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(): void{
    
    console.log(this.activateRoute.snapshot.paramMap.get("id"))
  }
}
