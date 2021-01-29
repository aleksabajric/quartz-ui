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

  findAll(){
    return this.http.get<any>(environment.baseUrl + "/quartz/findAll");
  }

  save(name: string, description: string, cron: string) {
  console.log(this.appComponent.getToken());
  const data = {'name': name, 'description': description, 'cron': cron}
    return this.http.post<any>(environment.baseUrl + "/quartz/save", data).subscribe((res)=>{
      console.log("Resultat: ", res)
    })
  }

  delete(id: string){
    return this.http.delete(environment.baseUrl + "/quartz/delete?jobId=" + id).subscribe(()=>{
      console.log("izbrisan: ", id)
    });
  }

}

