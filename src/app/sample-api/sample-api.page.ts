import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample-api',
  templateUrl: './sample-api.page.html',
  styleUrls: ['./sample-api.page.scss'],
})
export class SampleApiPage implements OnInit {
  users: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getApi();
  }

  getApi(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    });
  }

}
