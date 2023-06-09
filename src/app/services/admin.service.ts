import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditTicket } from './admin-models/editTicket';
import { Osi } from './admin-models/osi';
import { Ticket } from './admin-models/ticket';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    
    private osi!: Osi;

    private initialized: boolean = false;

    constructor(private http: HttpClient, private router: Router) 
    {}

    public initialize() {
        return new Observable(b => {
            this.http.get<Osi>(environment.api_root + "admin/get/osi/", { observe: 'response', withCredentials: true})
            .subscribe({
                next: (response) => {
                    if(response.ok) {
                        this.osi = response.body as Osi;
                        this.setInitialized = true;
                        b.next();
                        b.complete();
                    }
                },
                error: (error) => {
                    this.router.navigate(['/']);
                    b.next();
                    b.error();
                }
            });
        })
    }

    public editTicket(edit: EditTicket) {
        return new Observable(b => {
            this.http.post(environment.api_root + "admin/edit/ticket/", edit, { withCredentials: true})
            .subscribe(response => {
                alert("Успешно изменено");
                this.initialize().subscribe(res => {
                    b.next();
                    b.complete();
                })
            });
        });
    }

    set setInitialized(v: boolean) {
        this.initialized = v;
    }

    get IsInitialized(): boolean {
        return this.initialized;
    }

    get getOsiNumber(): number {
        return this.osi.id;
    }

    get getTickets(): Ticket[] {
        let tickets : Ticket[] = [];
        this.osi.houses.forEach(v => v.tickets.forEach(t => tickets.push(t)));
        tickets.sort((a, b) => (a.id > b.id ? -1 : 1));
        return tickets;
    }

}
