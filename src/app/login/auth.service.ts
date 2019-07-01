import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


//master branch

//feature branch

  public login(loginDetails: any): Observable<any> {
    return this.http.post(environment.API.AUTH, loginDetails);
  }

  public getToken(): string {
      return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
      // get the token
      const token = this.getToken();
      if(token){
        return true;
      }else {
        return false;
      }
      // return a boolean reflecting
      // whether or not the token is expired
      // return tokenNotExpired(null, token);
  }


}
