import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { House } from '../services/admin-models/house';
import { Ticket } from "./admin-models/ticket";
import { User } from "./user-models/user";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private user: User;
    private initialized: boolean = false;
    private houses!: House[]

    constructor(private http: HttpClient, 
        private userService: UserService) {
        this.user = userService.User;
    }

    public initialize() {
        return new Observable(b => {

            this.http.get<User>(environment.api_root + "user/get/", { observe: 'response', withCredentials: true})
            .subscribe(response => {
                if(response.ok) {
                    this.user = response.body as User;

                    this.http.get<House[]>(environment.api_root + "user/get/houses/", { observe: 'response', withCredentials: true})
                        .subscribe(response => {
                          if(response.ok) {
                            this.houses = response.body as House[];
                        
                            this.setInitialized = true;
                        
                            b.next();
                            b.complete();
                        }
                    });
                }
            });
        })
    }

    public updateHouses() {
        return new Observable(b => {
            this.http.get<House[]>(environment.api_root + "user/get/houses/", { observe: 'response', withCredentials: true})
            .subscribe(response => {
                if(response.ok) {
                    this.houses = response.body as House[];
                        
                    this.setInitialized = true;
                        
                    b.next();
                    b.complete();
                }
            });
        })
    }

    public sendTicket(subject: string, description: string, house: House) {
        
        return new Observable(b => {
            this.http.post(environment.api_root + 'user/add/ticket/', {iin: this.user.iin, telephone: 
                this.user.telephone, houseId: house.id,
                subject: subject, description: description }, { observe: 'response' }).subscribe(response => {
                    if(response.ok) {
                        console.log("success");
                        alert("Успешно отправлено!");
                    }

                    b.next();
                    b.complete();
                })
        })
    }

    get getTickets(): Ticket[] {
        let tickets : Ticket[] = [];
        this.houses.forEach(v => v.tickets.forEach(t => tickets.push(t)));
        tickets.sort((a, b) => (a.id > b.id ? -1 : 1));
        return tickets;
    }

    set setInitialized(v: boolean) {
        this.initialized = v;
    }

    get IsInitialized(): boolean {
        return this.initialized;
    }

    get Houses() {
        return this.houses;
    }

    get Name(){
        return this.user.fullname;
    }
}