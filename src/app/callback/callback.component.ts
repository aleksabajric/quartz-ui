import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.appComponent.fetchToken(p.code, p.state).subscribe(data => {
        this.appComponent.updateToken(data.accessToken);
        console.log(data.accessToken);
        this.router.navigate(['/home']);
      })
    })
  }

}