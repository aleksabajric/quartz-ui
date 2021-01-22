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

  constructor(private api:GetApiService,private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {    
    } );
  }
  
  title = 'Quartz App';
  jobArray: string[] = [];

  saveJob(value: string) {

    this.api.save().subscribe(data => {
      this.title = data.title;
  })
    
    this.jobArray.push(value);
    console.log(this.jobArray);
    
  }

  updateJob(){
    this.api.save().subscribe(data => {
  })
  }

  deleteItem() {   console.log("delete item")  }


}
