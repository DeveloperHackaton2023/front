import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { House } from '../services/admin-models/house';
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