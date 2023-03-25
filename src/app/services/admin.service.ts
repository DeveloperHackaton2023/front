import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Osi } from './admin-models/osi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    
    private osi!: Osi;

    private initialized: boolean = false;

    constructor(private http: HttpClient, private router: Router) 
    { 

    }

    public initialize() {
        return new Observable(b => {
            this.http.get<Osi>(environment.api_root + "admin/get/osi/", { observe: 'response', withCredentials: true})
            .subscribe(response => {
            
              if(response.ok) {
                this.osi = response.body as Osi;
                this.setInitialized = true;
                b.next();
                b.complete();
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

    get getOsiNumber(): number {
        return this.osi.id;
    }

}