import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppComponent} from "./app.component";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  postId = 0;
  constructor(
    private http:HttpClient,
    private appComponent: AppComponent
  ) { }

  apiCallGet(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1');
  }

  save() {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${this.appComponent.getToken()}`,
  });
  console.log(this.appComponent.getToken());
  let options = { headers: headers };
    return this.http.post<any>(environment.baseUrl + "/quartz/save", {name: 'Angular job', description: "Angular Descrition", cron: "0 0/1 * 1/1 * ? *"}, options)
  }

}

