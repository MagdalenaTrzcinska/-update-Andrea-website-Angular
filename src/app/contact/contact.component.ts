import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactDetails = [
    {name: 'Address', details: '198 West 21th Street, Suite 721 New York NY 10016'},
    {name: 'Phone', details: '+ 1235 2355 98'},
    {name: 'Email', details: 'info@yoursite.com'},
    {name: 'Website', details: 'yoursite.com'}

  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
