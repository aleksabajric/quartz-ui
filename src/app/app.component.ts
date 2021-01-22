import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'Quartz App';
  
  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint = '/login/oauth2/code/google';
  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';


constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient){
}

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
    }

    updateToken(token: string) {
      localStorage.setItem(this.tokenKey, token);
    }
  
    fetchToken(code: string, state: string): Observable<any> {
      return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
    }
  
    getToken() {
      return localStorage.getItem(this.tokenKey);
    }
  
    isLoggedIn(): boolean {
      const token = this.getToken();
      return token != null;
    }
  
    removeToken() {
      localStorage.removeItem(this.tokenKey);
    }
  
    logout(): Observable<any> {
      return this.http.post(this.baseUrl + '/logout', this.getToken());
    }


 

}
