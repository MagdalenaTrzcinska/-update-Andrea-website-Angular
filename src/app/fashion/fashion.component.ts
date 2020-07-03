import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {


  posts = [
    {
      img: 1,
      name: 'A Loving Heart is the Truest Wisdom',
      date: 'June 28, 2019',
      category: 'Travel',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },


    {
      img: 2,
      name: 'Great Things Never Came from Comfort Zone',
      date: 'June 28, 2019',
      category: 'Travel',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 3,
      name: 'Paths Are Made by Walking',
      date: 'June 28, 2019',
      category: 'Lifestyle',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 4,
      name: 'The Secret of Getting Ahead is Getting Started',
      date: 'June 28, 2019',
      category: 'Nature',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 5,
      name: 'You Can\'t Blame Gravity for Falling in Love',
      date: 'June 28, 2019',
      category: 'Lifestyle',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 6,
      name: 'You Can\'t Blame Gravity for Falling in Love',
      date: 'June 28, 2019',
      category: 'Travel',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 7,
      name: 'You Can\'t Blame Gravity for Falling in Love',
      date: 'June 28, 2019',
      category: 'Nature',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

    {
      img: 8,
      name: 'You Can\'t Blame Gravity for Falling in Love',
      date: 'June 28, 2019',
      category: 'Nature',
      comment: '5 Comment',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }


}
