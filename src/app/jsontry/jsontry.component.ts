import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-jsontry',
  templateUrl: './jsontry.component.html',
  styleUrls: ['./jsontry.component.scss']
})
export class JsontryComponent implements OnInit {
  data: any;
  constructor(private http:Http) {
    this.http.get('assets/data.json').subscribe(res => this.data = res.json());
   }

  ngOnInit() {
  }

}
