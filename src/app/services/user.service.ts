import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from './user-models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isAuthorized: boolean = false;
  private user!: User;
  private token!: string;

  constructor(private http: HttpClient, private router: Router) { }

  public tryLogin(iin: string, password: string, lord: string) {
    this.http.post(environment.api_root + "auth/v1/authenticate", {"iin": iin, "password": password}, { observe: 'response', responseType: 'text'})
    .subscribe(response => {
      if(response.ok) {
        this.token = response.body as string;
        this._isAuthorized = true;
        document.cookie = 'jwt=' + this.token;

        this.http.get<User>(environment.api_root + "user/get/", { observe: 'response', withCredentials: true})
        .subscribe(response => {
        
          if(response.ok) {
            this.user = response.body as User;

            if(lord == 'lord' && this.user.roles.includes('ROLE_ADMIN'))
              this.router.navigate(['/user/admin/dashboard'])
            else
              this.router.navigate(['/user'])
          }
        });
        
      }
    });
  }

  public isAuthorized() {
    return this._isAuthorized;
  }
}
