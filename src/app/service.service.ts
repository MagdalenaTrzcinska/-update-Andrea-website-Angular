import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  filteredStatus = '';

  constructor() {
  }

  onNav(){
    //popraw

    let el2 = document.getElementsByClassName('main')[0];
    el2.classList.toggle('col-12');
    el2.classList.toggle('d-none');
  }
}
