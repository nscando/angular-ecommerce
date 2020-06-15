import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConectorService {
  subject = new Subject();

  constructor() {}

  sendMsg(product) {
    this.subject.next(product); // desencadena el evento
  }

  getMsg() {
    return this.subject.asObservable(); //recibe el evento
  }
}
