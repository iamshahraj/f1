import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  a: any;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.list.subscribe(res => this.a = res) 
  }

}
