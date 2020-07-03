import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  posts = [
    {
      numberPhoto: 1,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
    {
      numberPhoto: 2,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
    {
      numberPhoto: 3,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
    {
      numberPhoto: 4,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
    {
      numberPhoto: 5,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
    {
      numberPhoto: 6,
      header: 'A Loving Heart is the Truest Wisdom',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      author: 'Dave Lewis',
      data: 'June 28, 2019'
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
