import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private lists = new BehaviorSubject<any>([])
  list = this.lists.asObservable();

  constructor() {}

  changeList(list) {
    this.lists.next(list);
  }

}
