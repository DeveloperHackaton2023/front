import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isAuthorized: boolean = false;
  private roles!: string;
  private token!: string;

  constructor(private http: HttpClient, private router: Router) { }

  public tryLogin(iin: string, password: string, lord: string) {
    this.http.post(environment.api_root + "auth/v1/authenticate", {"iin": iin,"password": password}, { observe: 'response', responseType: 'text'})
    .subscribe(response => {

      if(response.ok) {
        console.log(response.body);
        this.token = response.body as string;
        this._isAuthorized = true;

        this.http.get(environment.api_root + "auth/users/get/roles/", { observe: 'response', responseType: 'text', withCredentials: true})
        .subscribe(response => {
        
          if(response.ok) {
            console.log(response.body);
            this.roles = response.body as string;
          }


          if(lord == 'lord' && this.roles.includes('ROLE_ADMIN'))
            this.router.navigate(['/admin'])
          else
            this.router.navigate(['/user'])

        });
        
      }
    });
  }

  public isAuthorized() {
    return this._isAuthorized;
  }
}
