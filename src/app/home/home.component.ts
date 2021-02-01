import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { GetApiService } from '../get-api.service';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl:'./home.html',
  styleUrls: ['../app.component.css']
})

export class HomeComponent implements OnInit {
  private tokenKey = 'token';

  constructor(private api:GetApiService,private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    localStorage.setItem(this.tokenKey, this.route.snapshot.queryParams['token']);

    this.api.findAll().subscribe((res)=>{
      res.map((i: any)=> {
        const job = {'id': i['id'], 'name': i['name'], 'description': i['description'], 'cron': i['cron']};
        this.jobResponse.push(job);
      })
    });
    console.log(this.jobResponse);
}
  
  title = 'Quartz App';
  jobResponse: any = [];

  saveJob(job: string, description: string, cron: string,) {
    this.api.save(job, description, cron)
    this.jobResponse.push({'name':job});
  }

  updateJob(id:string, cron: string){
    this.api.update(id , cron);
    location.reload();
  }

  deleteJob(id : string) { 
    this.api.delete(id);
    location.reload();
    }


}
