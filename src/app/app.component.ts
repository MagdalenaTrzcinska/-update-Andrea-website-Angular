import {Component, Renderer2} from '@angular/core';
import {ServiceService} from "./service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private renderer: Renderer2, private service: ServiceService) {
  }

  onNav(){
    let el = document.getElementsByClassName('navHidden')[0];

    el.classList.toggle('d-block');
    el.classList.toggle('col-11');


    this.service.onNav();




  }
}
