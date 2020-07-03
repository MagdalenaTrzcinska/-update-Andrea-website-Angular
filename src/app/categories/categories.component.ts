import {Component, OnChanges, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnChanges {

  tags = ['ANIMALS', 'HUMAN', 'PEOPLE', 'CAT', 'DOG', 'NATURE', 'LEAVES', 'FOOD'];

  categories = [
    {name: 'Fashion', account: 6},
    {name: 'Technology', account: 2},
    {name: 'Travel', account: 4},
    {name: 'Food', account: 4},
    {name: 'Photography', account: 5}];


  popularArticles = [
    {
      img: 1,
      name: 'Even the all-powerful Pointing has no control',
      date: 'June 28,2019',
      author: 'Dave Lewis',
      comments: 19
    },

    {
      img: 2,
      name: 'Even the all-powerful Pointing has no control',
      date: 'June 28,2019',
      author: 'Dave Lewis',
      comments: 19
    },

    {
      img: 3,
      name: 'Even the all-powerful Pointing has no control',
      date: 'June 28,2019',
      author: 'Dave Lewis',
      comments: 19
    },
  ];

  filteredStatus = '';

  constructor(private service: ServiceService) {
    this.filteredStatus = this.service.filteredStatus;

  }

  ngOnChanges(): void {
    this.service.filteredStatus = this.filteredStatus;
  }

  ngOnInit(): void {
  }


  onSubmit(email) {
    console.log(email);
  }
}
