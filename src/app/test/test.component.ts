import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  userName: string = "";
  age: number;

  t: string;
  t1: number;
  a = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.list.subscribe(res => this.a = res) 
    this._data.changeList(this.a)
  }

  add() {
    this.a.push({
      'name':this.userName,
      'age':this.age
    })

    this._data.changeList(this.a)
    this.userName = ''
    this.age = null
  }

}
