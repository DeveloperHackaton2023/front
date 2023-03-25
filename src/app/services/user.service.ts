import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isAuthorized: boolean = false;
  private token!: string;

  constructor(private http: HttpClient, private router: Router) { }

  public tryLogin(iin: string, password: string) {
    this.http.post(environment.api_root + "auth/v1/authenticate", {"iin": iin,"password": password}, { observe: 'response', responseType: 'text'})
    .subscribe(response => {

      if(response.ok) {
        console.log(response.body);
        this.token = response.body as string;
        this._isAuthorized = true;
        this.router.navigate([''])
      }
    });
  }

  public isAuthorized() {
    return this._isAuthorized;
  }
}
